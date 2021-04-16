import { useSelector } from 'react-redux'
import { AppState } from '..'

export function useFarmState(): AppState['farm'] {
  return useSelector<AppState, AppState['farm']>(state => state.farm)
}
