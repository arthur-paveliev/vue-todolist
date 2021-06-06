import { State, Project } from './types'

const getProjects = (state: State): Project[] => state.data

const isLoading = (state: State): boolean => state.loading

export const getters = {
  getProjects,
  isLoading
}
