import { Types, State, Project } from './types'

export const mutations = {
  [Types.REQUEST_LOAD_PROJECTS] (state: State): void {
    state.loading = true
    state.errors = []
    state.data = []
  },
  [Types.SUCCESS_LOAD_PROJECTS] (state: State, payload: Project[]): void {
    state.data = payload
    state.loading = false
  },
  [Types.FAIL_LOAD_PROJECTS] (state: State, payload: Error): void {
    state.errors.push(payload)
    state.loading = false
  }
}
