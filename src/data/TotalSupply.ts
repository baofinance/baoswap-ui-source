import { BigNumber } from '@ethersproject/bignumber'
import { useMemo } from 'react'
import { Token, TokenAmount } from 'uniswap-xdai-sdk'
import ERC20_INTERFACE from '../constants/abis/erc20'
import { FarmablePool } from '../constants/bao'
import { useTokenContract } from '../hooks/useContract'
import { useMultipleContractSingleData, useSingleCallResult } from '../state/multicall/hooks'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
export function useTotalSupply(token?: Token): TokenAmount | undefined {
  const contract = useTokenContract(token?.address, false)

  const totalSupply: BigNumber = useSingleCallResult(contract, 'totalSupply')?.result?.[0]

  return token && totalSupply ? new TokenAmount(token, totalSupply.toString()) : undefined
}

export function useAllTotalSupply(farmablePools: FarmablePool[]): (TokenAmount | undefined)[] {
  const tokenAddresses = useMemo(() => farmablePools && farmablePools.map(f => f.address), [farmablePools])

  const totalSupplyResults = useMultipleContractSingleData(tokenAddresses, ERC20_INTERFACE, 'totalSupply')

  return useMemo(() => {
    return totalSupplyResults.map((totalSupplyResult, i) => {
      const token = farmablePools && farmablePools[i].token
      const totalSupply: BigNumber | undefined = totalSupplyResult.result?.[0]
      return token && totalSupply ? new TokenAmount(token, totalSupply.toString()) : undefined
    })
  }, [farmablePools, totalSupplyResults])
}
