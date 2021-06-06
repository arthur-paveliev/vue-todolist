import { ActionContext } from 'vuex'

import { getProjects } from './project.api'
import { Types, Project } from './types'

const fetchProjects = (context: ActionContext<unknown, unknown>): Promise<void> => {
  context.commit(Types.REQUEST_LOAD_PROJECTS)

  return getProjects()
    .then((data: Project[]) => context.commit(Types.SUCCESS_LOAD_PROJECTS, data))
    .catch((err: Error) => context.commit(Types.FAIL_LOAD_PROJECTS, err))
}

export const actions = {
  getProjects: fetchProjects
}
