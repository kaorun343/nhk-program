import { initialState, State } from './state'
import { Action } from './actions'

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state
  }
}
