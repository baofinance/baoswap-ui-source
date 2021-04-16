import { useMemo } from 'react'
import { ChainId, Fraction, JSBI, Token, TokenAmount, WETH } from 'uniswap-xdai-sdk'
import { useActiveWeb3React, useForeignWeb3React } from '.'
import { FarmablePool, priceOracles, useAllSidechainFarmablePools, useSidechainFarmablePool } from '../constants/bao'
import { usePair, usePairs, useRewardToken } from '../data/Reserves'
import {
  useMultipleContractSingleData,
  useSingleCallResult,
  useSingleContractMultipleData
} from '../state/multicall/hooks'
import { UNIV2_INTERFACE, useLPContract, useMasterChefContract } from './useContract'
import { BAO, BAOCX, SUSHI, XDAI_WETH } from '../constants'
import { BigNumber } from '@ethersproject/bignumber'
import { useAllTotalSupply } from '../data/TotalSupply'
import { useAllStakedAmounts } from '../data/Staked'
import { CHAINLINK_PRICE_ORACLE_INTERFACE, usePriceOracleContract } from '../constants/abis/Chainlink'

const ten = JSBI.BigInt(10)

export const useBaoUsdPrice = (): Fraction | undefined => {
  // BAO-XDAI
  const XDAI = WETH[100]
  const [, pair1] = usePair(BAO, XDAI)
  const xDaiUsdOracleAddress = useMemo(() => priceOracles[100][XDAI.address], [XDAI.address])

  // BAO-WETH
  const [, pair2] = usePair(BAO, XDAI_WETH)
  const wethUsdOracleAddress = useMemo(() => priceOracles[100][XDAI_WETH.address], [])

  // BAO-USDC
  // const [, pair3] = usePair(BAO, USDC)
  // const usdcUsdOracleAddress = useMemo(() => priceOracles[100][USDC.address], [])

  // BAO-SUSHI
  const [, pair4] = usePair(BAO, SUSHI)
  const sushiUsdOracleAddress = useMemo(() => priceOracles[100][SUSHI.address], [])

  const allPriceOracles = [xDaiUsdOracleAddress, wethUsdOracleAddress, sushiUsdOracleAddress]

  const allPairs = useMemo(() => [pair1, pair2, pair4], [pair1, pair2, pair4])

  const priceRawResults = useMultipleContractSingleData(
    allPriceOracles,
    CHAINLINK_PRICE_ORACLE_INTERFACE,
    'latestRoundData',
    []
  )
  const decimalsResults = useMultipleContractSingleData(
    allPriceOracles,
    CHAINLINK_PRICE_ORACLE_INTERFACE,
    'decimals',
    []
  )

  return useMemo(() => {
    const allPrices = allPairs.map((pair, i) => {
      if (!pair) {
        return undefined
      }
      const priceOfBao = pair.priceOf(BAO)
      const priceRaw: BigNumber | undefined = priceRawResults[i].result?.[1]
      const decimals: BigNumber | undefined = decimalsResults[i].result?.[0]
      const decimated = decimals
        ? JSBI.exponentiate(ten, JSBI.subtract(JSBI.BigInt(decimals.toString()), JSBI.BigInt(1)))
        : undefined
      const chainFraction = priceRaw && decimated ? new Fraction(JSBI.BigInt(priceRaw), decimated) : undefined
      return chainFraction ? chainFraction.multiply(priceOfBao) : undefined
    })

    const validPrices = allPrices.flatMap(p => (p instanceof Fraction ? [p] : []))
    const averagePrice = validPrices
      .reduce((sum, current) => sum.add(current), new Fraction(JSBI.BigInt(0)))
      .divide(JSBI.BigInt(validPrices.length))

    return averagePrice
  }, [allPairs, decimalsResults, priceRawResults])
}

export const useBaocxPrice = (): [Fraction | undefined, Fraction | undefined] => {
  const [, pair] = usePair(BAO, BAOCX)
  const baoPriceUsd = useBaoUsdPrice()
  return [
    pair ? baoPriceUsd?.divide(JSBI.BigInt(10)).multiply(pair.priceOf(BAOCX)) : undefined,
    pair ? pair.priceOf(BAOCX) : undefined
  ]
}

function useForeignReserveOf(
  farmablePool: FarmablePool,
  token0: Token | undefined,
  token1: Token | undefined,
  reserveToken: Token | undefined,
  totalSupply: TokenAmount | undefined
): [TokenAmount | undefined, Fraction | undefined] | undefined {
  const mainnetWeb3 = useForeignWeb3React()
  const foreignToken = useSidechainFarmablePool(ChainId.MAINNET, farmablePool)?.token
  const foreignTokenContract = useLPContract(foreignToken?.address, false, mainnetWeb3.chainId)

  const result = useSingleCallResult(foreignTokenContract, 'getReserves', undefined, undefined, mainnetWeb3)

  const foreignTotalSupplyResult: string | undefined = useSingleCallResult(
    foreignTokenContract,
    'totalSupply',
    undefined,
    undefined,
    mainnetWeb3
  )?.result?.[0]

  const foreignSupplyRatio = useMemo(() => {
    const foreignSupplyTokenAmount = foreignTotalSupplyResult
      ? new TokenAmount(farmablePool.token, foreignTotalSupplyResult)
      : undefined
    const foreignSupplyRatio =
      totalSupply && foreignSupplyTokenAmount ? totalSupply.divide(foreignSupplyTokenAmount) : undefined
    return foreignSupplyRatio
  }, [foreignTotalSupplyResult, totalSupply, farmablePool.token])

  return useMemo(() => {
    if (!token0 || !token1 || !reserveToken || !farmablePool.isSushi) {
      return undefined
    }

    const reserve: string | undefined = token0 === reserveToken ? result.result?.[0] : result.result?.[1]

    return reserve && foreignSupplyRatio ? [new TokenAmount(reserveToken, reserve), foreignSupplyRatio] : undefined
  }, [result, token0, token1, reserveToken, foreignSupplyRatio, farmablePool.isSushi])
}

function useAllForeignReserveOf(
  farmablePools: FarmablePool[],
  priceOracleDescriptors: PriceOracleDescriptor[],
  totalSupplies: (TokenAmount | undefined)[]
): ([TokenAmount | undefined, Fraction | undefined] | undefined)[] {
  const mainnetWeb3 = useForeignWeb3React()
  const allForeignTokens = useAllSidechainFarmablePools(ChainId.MAINNET, farmablePools)

  const allForeignTokenAddresses = useMemo(() => allForeignTokens.map(ft => ft?.token.address), [allForeignTokens])

  const getReservesResults = useMultipleContractSingleData(
    allForeignTokenAddresses,
    UNIV2_INTERFACE,
    'getReserves',
    undefined,
    undefined,
    mainnetWeb3
  )

  const foreignTotalSupplyResults = useMultipleContractSingleData(
    allForeignTokenAddresses,
    UNIV2_INTERFACE,
    'totalSupply',
    undefined,
    undefined,
    mainnetWeb3
  )

  return useMemo(() => {
    return priceOracleDescriptors.map((pod, i) => {
      const { token0, token1, priceOracleBaseToken: reserveToken } = pod
      const foreignTotalSupplyResult = foreignTotalSupplyResults[i].result
      const foreignTotalSupply: BigNumber | undefined = foreignTotalSupplyResult?.[0]
      const reserves = getReservesResults[i].result
      const reserve0Result: BigNumber | undefined = reserves?.[0]
      const reserve1Result: BigNumber | undefined = reserves?.[1]
      const totalSupply = totalSupplies[i]
      const token = allForeignTokens[i]?.token

      const foreignSupplyTokenAmount =
        foreignTotalSupply && token ? new TokenAmount(token, foreignTotalSupply.toString()) : undefined
      const foreignSupplyRatio = foreignSupplyTokenAmount ? totalSupply?.divide(foreignSupplyTokenAmount) : undefined

      // const farmablePool = farmablePools[i]
      if (!token0 || !token1 || !reserveToken || !reserve0Result || !reserve1Result) {
        return undefined
      }

      const reserve: string | undefined =
        token0 === reserveToken ? reserve0Result.toString() : reserve1Result.toString()

      return reserve && foreignSupplyRatio ? [new TokenAmount(reserveToken, reserve), foreignSupplyRatio] : undefined
    })
  }, [allForeignTokens, foreignTotalSupplyResults, getReservesResults, priceOracleDescriptors, totalSupplies])
}

export interface PriceOracleDescriptor {
  token0: Token | undefined
  token1: Token | undefined
  priceOracleBaseToken: Token | undefined
  isUsingBaoUsdPrice: boolean
  priceOracleAddress: string | undefined
}

export function useAllPriceOracleDescriptors(farmablePools: FarmablePool[]): PriceOracleDescriptor[] {
  const { chainId } = useActiveWeb3React()
  const chainIdNumber = useMemo(() => (chainId === ChainId.XDAI ? 100 : chainId === ChainId.MAINNET ? 1 : undefined), [
    chainId
  ])

  const tokenDesciptorPairs = useMemo(() => farmablePools.map(f => f.tokenAddresses), [farmablePools])
  const priceOraclesForChain = useMemo(() => chainIdNumber && priceOracles[chainIdNumber], [chainIdNumber])

  const tokensAndBaseToken = useMemo(() => {
    return tokenDesciptorPairs.map(tokenDescriptorPair => {
      const [tokenDescriptor0, tokenDescriptor1] = tokenDescriptorPair

      const token0 =
        chainId && new Token(chainId, tokenDescriptor0.address, tokenDescriptor0.decimals, tokenDescriptor0.symbol)
      const token1 =
        chainId && new Token(chainId, tokenDescriptor1.address, tokenDescriptor1.decimals, tokenDescriptor1.symbol)

      const denomination = (): { priceOracleBaseToken: Token | undefined; priceOracleAddress: string | undefined } => {
        if (!priceOraclesForChain || !token0 || !token1) {
          return { priceOracleBaseToken: undefined, priceOracleAddress: undefined }
        }
        const token0Oracle = priceOraclesForChain[tokenDescriptor0.address]
        const token1Oracle = priceOraclesForChain[tokenDescriptor1.address]

        if (token0Oracle && token0Oracle.startsWith('0x')) {
          return { priceOracleBaseToken: token0, priceOracleAddress: token0Oracle }
        } else if (token1Oracle && token1Oracle.startsWith('0x')) {
          return { priceOracleBaseToken: token1, priceOracleAddress: token1Oracle }
        } else if (token0Oracle) {
          return { priceOracleBaseToken: token0, priceOracleAddress: token0Oracle }
        } else if (token1Oracle) {
          return { priceOracleBaseToken: token1, priceOracleAddress: token1Oracle }
        } else {
          return { priceOracleBaseToken: undefined, priceOracleAddress: undefined }
        }
      }

      const { priceOracleBaseToken, priceOracleAddress } = denomination()

      const isUsingBaoUsdPrice = !priceOracleAddress || !priceOracleAddress.startsWith('0x')

      return {
        token0,
        token1,
        priceOracleBaseToken,
        priceOracleAddress,
        isUsingBaoUsdPrice
      }
    })
  }, [chainId, priceOraclesForChain, tokenDesciptorPairs])

  return useMemo(() => {
    return tokensAndBaseToken.map(pod => {
      return pod
    })
  }, [tokensAndBaseToken])
}

export function useAllStakedTVL(
  farmablePools: FarmablePool[],
  priceOracleDescriptors: PriceOracleDescriptor[],
  baoPriceUsd: Fraction | undefined | null
): (Fraction | undefined)[] {
  const tokens = useMemo(() => farmablePools.map(f => f.token), [farmablePools])
  const totalSupplies = useAllTotalSupply(farmablePools)
  const foreignReserves = useAllForeignReserveOf(farmablePools, priceOracleDescriptors, totalSupplies)

  const priceOracleAddresses = useMemo(
    () => priceOracleDescriptors.map(pod => (!pod.isUsingBaoUsdPrice ? pod.priceOracleAddress : undefined)),
    [priceOracleDescriptors]
  )

  const rawPriceResults = useMultipleContractSingleData(
    priceOracleAddresses,
    CHAINLINK_PRICE_ORACLE_INTERFACE,
    'latestRoundData'
  )
  const decimalsResults = useMultipleContractSingleData(
    priceOracleAddresses,
    CHAINLINK_PRICE_ORACLE_INTERFACE,
    'decimals'
  )

  const stakedAmounts = useAllStakedAmounts(tokens)

  const ratiosStaked = useMemo(() => {
    return stakedAmounts.map((stakedAmount, i) => {
      const totalSupply = totalSupplies[i]
      return totalSupply ? stakedAmount?.divide(totalSupply) : undefined
    })
  }, [stakedAmounts, totalSupplies])

  const tokenPairs: [Token | undefined, Token | undefined][] = useMemo(
    () => priceOracleDescriptors.map((pod): [Token | undefined, Token | undefined] => [pod.token0, pod.token1]),
    [priceOracleDescriptors]
  )
  const pairs = usePairs(tokenPairs)

  return useMemo(() => {
    return priceOracleDescriptors.map((pod, i) => {
      const { priceOracleBaseToken, isUsingBaoUsdPrice } = pod
      const { isSushi } = farmablePools[i]
      const foreign = foreignReserves[i]
      const ratioStaked = ratiosStaked[i]
      const [, pair] = pairs[i]

      const pricedInReserveFn = () => {
        const usingReserve =
          isSushi && foreign
            ? foreign[0]
            : pair?.reserveOf(!isUsingBaoUsdPrice && priceOracleBaseToken ? priceOracleBaseToken : BAO)
        return usingReserve
      }

      const pricedInReserve = pricedInReserveFn()

      const priceRaw: string | undefined = rawPriceResults[i].result?.[1]
      const decimals: string | undefined = decimalsResults[i].result?.[0]

      const decimated = decimals ? JSBI.exponentiate(ten, JSBI.BigInt(decimals.toString())) : undefined
      const fetchedPriceInUsd = isUsingBaoUsdPrice ? baoPriceUsd?.divide(JSBI.BigInt(10)) : undefined

      const chainFraction = priceRaw && decimated ? new Fraction(JSBI.BigInt(priceRaw), decimated) : undefined
      const priceInUsd = fetchedPriceInUsd ? fetchedPriceInUsd : chainFraction
      const tvl =
        priceInUsd &&
        pricedInReserve &&
        priceInUsd
          .multiply(pricedInReserve)
          .multiply(isSushi ? (foreign && foreign[1] ? foreign[1] : JSBI.BigInt(0)) : JSBI.BigInt(1))
          .multiply('2')
      const stakedTVL = tvl ? ratioStaked?.multiply(tvl) : undefined
      return stakedTVL
    })
  }, [
    baoPriceUsd,
    decimalsResults,
    farmablePools,
    foreignReserves,
    pairs,
    priceOracleDescriptors,
    rawPriceResults,
    ratiosStaked
  ])
}

export function useStakedTVL(
  farmablePool: FarmablePool,
  stakedAmount: TokenAmount | undefined,
  totalSupply: TokenAmount | undefined,
  baoPriceUsd: Fraction | undefined | null
): Fraction | undefined {
  const { chainId } = useActiveWeb3React()
  const { isSushi } = farmablePool

  const [tokenDescriptor0, tokenDescriptor1] = farmablePool.tokenAddresses
  const chainIdNumber = useMemo(() => (chainId === ChainId.XDAI ? 100 : chainId === ChainId.MAINNET ? 1 : undefined), [
    chainId
  ])
  const token0 = useMemo(
    () => chainId && new Token(chainId, tokenDescriptor0.address, tokenDescriptor0.decimals, tokenDescriptor0.symbol),
    [chainId, tokenDescriptor0]
  )
  const token1 = useMemo(
    () => chainId && new Token(chainId, tokenDescriptor1.address, tokenDescriptor1.decimals, tokenDescriptor1.symbol),
    [chainId, tokenDescriptor1]
  )

  const ratioStaked = useMemo(() => (totalSupply ? stakedAmount?.divide(totalSupply) : undefined), [
    totalSupply,
    stakedAmount
  ])

  const priceOraclesForChain = useMemo(() => chainIdNumber && priceOracles[chainIdNumber], [chainIdNumber])

  const { priceOracleBaseToken, priceOracleAddress } = useMemo(() => {
    if (!priceOraclesForChain || !token0 || !token1) {
      return { priceOracleToken: undefined, priceOracleAddress: undefined }
    }
    const token0Oracle = priceOraclesForChain[tokenDescriptor0.address]
    const token1Oracle = priceOraclesForChain[tokenDescriptor1.address]

    if (token0Oracle && token0Oracle.startsWith('0x')) {
      return { priceOracleBaseToken: token0, priceOracleAddress: token0Oracle }
    } else if (token1Oracle && token1Oracle.startsWith('0x')) {
      return { priceOracleBaseToken: token1, priceOracleAddress: token1Oracle }
    } else if (token0Oracle) {
      return { priceOracleBaseToken: token0, priceOracleAddress: token0Oracle }
    } else if (token1Oracle) {
      return { priceOracleBaseToken: token1, priceOracleAddress: token1Oracle }
    } else {
      return { priceOracleBaseToken: undefined, priceOracleAddress: undefined }
    }
  }, [priceOraclesForChain, tokenDescriptor0, tokenDescriptor1, token0, token1])

  const isUsingBaoUsdPrice = useMemo(() => !priceOracleAddress || !priceOracleAddress?.startsWith('0x'), [
    priceOracleAddress
  ])

  const [, pair] = usePair(token0, token1)
  const foreign = useForeignReserveOf(farmablePool, token0, token1, priceOracleBaseToken, totalSupply)
  const pricedInReserve = useMemo(() => {
    if (!priceOracleBaseToken) {
      return null
    }
    const usingReserve =
      isSushi && foreign ? foreign[0] : pair?.reserveOf(!isUsingBaoUsdPrice ? priceOracleBaseToken : BAO)
    return usingReserve
  }, [priceOracleBaseToken, isSushi, foreign, pair, isUsingBaoUsdPrice])

  const priceOracleContract = usePriceOracleContract(!isUsingBaoUsdPrice ? priceOracleAddress : undefined)

  const priceRaw: string | undefined = useSingleCallResult(priceOracleContract, 'latestRoundData').result?.[1]
  const decimals: string | undefined = useSingleCallResult(priceOracleContract, 'decimals').result?.[0]

  return useMemo(() => {
    const decimated = decimals ? JSBI.exponentiate(ten, JSBI.BigInt(decimals.toString())) : undefined
    const fetchedPriceInUsd = isUsingBaoUsdPrice ? baoPriceUsd?.divide(JSBI.BigInt(10)) : undefined

    const chainFraction = priceRaw && decimated ? new Fraction(JSBI.BigInt(priceRaw), decimated) : undefined
    const priceInUsd = fetchedPriceInUsd ? fetchedPriceInUsd : chainFraction
    const tvl =
      priceInUsd &&
      pricedInReserve &&
      priceInUsd
        .multiply(pricedInReserve)
        .multiply(isSushi ? (foreign && foreign[1] ? foreign[1] : JSBI.BigInt(0)) : JSBI.BigInt(1))
        .multiply('2')
    const stakedTVL = tvl ? ratioStaked?.multiply(tvl) : undefined
    return stakedTVL
  }, [decimals, isUsingBaoUsdPrice, baoPriceUsd, priceRaw, pricedInReserve, isSushi, foreign, ratioStaked])
}

export const useAllNewRewardPerBlock = (farmablePools: FarmablePool[]): JSBI[] => {
  const masterChef = useMasterChefContract()
  const pids = useMemo(() => farmablePools.map(f => [f.pid + 1]), [farmablePools])

  const rewardPerBlockResults = useSingleContractMultipleData(masterChef, 'getNewRewardPerBlock', pids)

  return useMemo(() => {
    return rewardPerBlockResults.map(r => {
      const result: BigNumber | undefined = r.result?.[0]
      return JSBI.BigInt(result?.toString() ?? '0')
    })
  }, [rewardPerBlockResults])
}

// ((bao_price_usd * bao_per_block * blocks_per_year * pool_weight) / (total_pool_value_usd)) * 100.0
export function useAPY(
  farmablePool: FarmablePool | undefined,
  baoPriceUsd: Fraction | undefined | null,
  newRewardPerBlock: JSBI | undefined,
  tvlUsd: Fraction | undefined
): Fraction | undefined {
  const rewardToken = useRewardToken()

  return useMemo(() => {
    if (!baoPriceUsd || !tvlUsd || !tvlUsd.greaterThan('0') || !newRewardPerBlock) {
      return undefined
    }
    const blocksPerYear = JSBI.BigInt(6311390) // (31556952 (seconds / year)) / (5 blocks/second) = 6311390.4

    const decimated = JSBI.exponentiate(ten, JSBI.BigInt((rewardToken.decimals - 1).toString()))

    const rewardPerBlock = new Fraction(newRewardPerBlock, decimated)

    return (
      tvlUsd &&
      baoPriceUsd
        .multiply(rewardPerBlock)
        .multiply(blocksPerYear)
        .divide(tvlUsd)
    )
  }, [newRewardPerBlock, baoPriceUsd, rewardToken.decimals, tvlUsd])
}

// ((bao_price_usd * bao_per_block * blocks_per_year * pool_weight) / (total_pool_value_usd)) * 100.0
export function useAllAPYs(
  poolInfoFarmablePools: (FarmablePool | undefined)[],
  baoPriceUsd: Fraction | undefined | null,
  newRewardPerBlocks: (JSBI | undefined)[],
  tvlUsds: (Fraction | undefined)[]
): (Fraction | undefined)[] {
  const rewardToken = useRewardToken()

  return useMemo(() => {
    return poolInfoFarmablePools.map((_, i) => {
      const tvlUsd = tvlUsds[i]
      const newRewardPerBlock = newRewardPerBlocks[i]
      if (!baoPriceUsd || !tvlUsd || !tvlUsd.greaterThan('0') || !newRewardPerBlock) {
        return undefined
      }
      const blocksPerYear = JSBI.BigInt(6311390) // (31556952 (seconds / year)) / (5 blocks/second) = 6311390.4

      const decimated = JSBI.exponentiate(ten, JSBI.BigInt((rewardToken.decimals - 1).toString()))

      const rewardPerBlock = new Fraction(newRewardPerBlock, decimated)

      return (
        tvlUsd &&
        baoPriceUsd
          .multiply(rewardPerBlock)
          .multiply(blocksPerYear)
          .divide(tvlUsd)
      )
    })
  }, [poolInfoFarmablePools, tvlUsds, newRewardPerBlocks, baoPriceUsd, rewardToken.decimals])
}
