import { createReducer } from '@reduxjs/toolkit'
import { resetHarvestState } from './actions'

export interface FarmState {
  attemptingHarvest: boolean
  harvestErrorMessage?: string
  harvestTxnHash?: string
}

export const initialFarmState: FarmState = {
  attemptingHarvest: false,
  harvestErrorMessage: undefined,
  harvestTxnHash: undefined
}

export default createReducer<FarmState>(initialFarmState, builder =>
  builder.addCase(resetHarvestState, () => initialFarmState)
)
