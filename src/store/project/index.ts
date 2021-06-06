import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { State } from './types'

const defaultState: State = {
  data: [],
  loading: false,
  errors: []
}

export default {
  state: defaultState,
  getters,
  actions,
  mutations
}
