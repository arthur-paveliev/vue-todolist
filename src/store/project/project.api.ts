import { Project } from './types'

export const createProject = (data: Project): Promise<Project> => {
  return new Promise((resolve) => {
    const id = Math.random().toString()

    setTimeout(() => resolve({ ...data, id }), 100)
  })
}

export const editProject = (data: Project): Promise<Project> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 100)
  })
}

const projectsData: Project[] = [
  { id: '1', title: 'Lorem Ipsum', summary: 'Lorem ipsum dolar sit amet', tags: ['tag1', 'tag2'], color: 'magenta' },
  { id: '2', title: 'Dolar sit amet', summary: 'Lorem ipsum dolar sit amet', color: 'lightblue' },
  { id: '3', title: 'Greeting!', summary: 'Hello world', color: 'midnightblue' },
  { id: '4', title: 'Hello World!', summary: 'Hello world' }
]
export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(projectsData), 500)
  })
}
