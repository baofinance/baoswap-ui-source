import CHAINLINK_PRICE_ORACLE from './AggregatorV3Interface.json'
import { Interface } from 'ethers/lib/utils'
import { useContract } from '../../hooks/useContract'
import { Contract } from '@ethersproject/contracts'

export const CHAINLINK_PRICE_ORACLE_INTERFACE = new Interface(CHAINLINK_PRICE_ORACLE.compilerOutput.abi)

export function usePriceOracleContract(address?: string | undefined): Contract | null {
  return useContract(address, CHAINLINK_PRICE_ORACLE.compilerOutput.abi)
}
