import { State } from './state'

/**
 * エリアIDを取り出す
 * @param state ReduxのState
 */
export function selectAreaId(state: State) {
  return state.area
}
