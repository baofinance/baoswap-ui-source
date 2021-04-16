import { Contract } from '@ethersproject/contracts'
import { ChainId, TokenAmount, WETH } from 'uniswap-xdai-sdk'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { useMemo } from 'react'
import ENS_ABI from '../constants/abis/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../constants/abis/ens-public-resolver.json'
import { ERC20_BYTES32_ABI } from '../constants/abis/erc20'
import ERC20_ABI from '../constants/abis/erc20.json'
import MASTERFARMER_ABI from '../constants/abis/masterfarmer.json'
import BAO from '../constants/abis/bao.json'
import UNIV2LP from '../constants/abis/uni_v2_lp.json'
import UNISOCKS_ABI from '../constants/abis/unisocks.json'
import WETH_ABI from '../constants/abis/weth.json'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants/multicall'
import { getContract } from '../utils'
import { useActiveWeb3React, useForeignWeb3React } from './index'
import { BAOCX } from '../constants'
import { useSingleCallResult } from '../state/multicall/hooks'
import { contractAddresses } from '../constants/bao'
import { Interface } from '@ethersproject/abi'

export const UNIV2_INTERFACE = new Interface(UNIV2LP)

// returns null on errors
export function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
  overrideChainId?: ChainId
): Contract | null {
  const activeWeb3React = useActiveWeb3React()
  const mainnetWeb3React = useForeignWeb3React()
  const usingWeb3React = overrideChainId === ChainId.MAINNET ? mainnetWeb3React : activeWeb3React
  const { library, account } = usingWeb3React

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

function useAllContracts(
  addresses: (string | undefined)[],
  ABI: any,
  withSignerIfPossible = true,
  overrideChainId?: ChainId
): (Contract | null)[] {
  const activeWeb3React = useActiveWeb3React()
  const mainnetWeb3React = useForeignWeb3React()
  const usingWeb3React = overrideChainId === ChainId.MAINNET ? mainnetWeb3React : activeWeb3React
  const { library, account } = usingWeb3React

  return useMemo(() => {
    return addresses.map(address => {
      if (!address || !ABI || !library) return null
      try {
        return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
      } catch (error) {
        console.error('Failed to get contract', error)
        return null
      }
    })
  }, [addresses, ABI, library, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

// native wrapped chain currency
export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useLPContract(
  address?: string,
  withSignerIfPossible?: boolean,
  overrideChainId?: ChainId
): Contract | null {
  return useContract(address, UNIV2LP, withSignerIfPossible, overrideChainId)
}

export function useLPContracts(
  addresses: string[],
  withSignerIfPossible?: boolean,
  overrideChainId?: ChainId
): (Contract | null)[] {
  return useAllContracts(addresses, UNIV2LP, withSignerIfPossible, overrideChainId)
}

export function useMasterChefContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()

  return useContract(
    chainId === ChainId.XDAI ? contractAddresses.masterChef[ChainId.XDAI] : undefined,
    MASTERFARMER_ABI,
    withSignerIfPossible
  )
}

export function useBaoContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()

  return useContract(
    chainId === ChainId.XDAI ? contractAddresses.bao[ChainId.XDAI] : undefined,
    BAO,
    withSignerIfPossible
  )
}

export function useBaocxBalance(withSignerIfPossible?: boolean): TokenAmount | undefined {
  const { account } = useActiveWeb3React()
  const contract = useContract(BAOCX.address, ERC20_ABI, withSignerIfPossible)
  const balance = useSingleCallResult(contract, 'balanceOf', [account ?? undefined]).result?.[0]

  return useMemo(() => (contract && balance ? new TokenAmount(BAOCX, balance?.toString()) : undefined), [
    balance,
    contract
  ])
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    switch (chainId) {
      case ChainId.XDAI:
        address = '0x25D2252Ec30de7830b6825D6b4A08E70a581cD6a'
        break
      case ChainId.MAINNET:
      case ChainId.GÖRLI:
      case ChainId.ROPSTEN:
      case ChainId.RINKEBY:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible)
}

export function useMulticallContract(overrideChainId?: ChainId): Contract | null {
  const activeWeb3React = useActiveWeb3React()
  const chainId = overrideChainId ?? activeWeb3React.chainId
  return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false, chainId)
}

export function useSocksController(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId === ChainId.MAINNET ? '0x65770b5283117639760beA3F867b69b3697a91dd' : undefined,
    UNISOCKS_ABI,
    false
  )
}
