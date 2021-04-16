import { createAction } from '@reduxjs/toolkit'

// export const typeInput = createAction<{ field: Field; typedValue: string; noLiquidity: boolean }>('mint/typeInputMint')
export const resetHarvestState = createAction<void>('farm/resetHarvestState')
