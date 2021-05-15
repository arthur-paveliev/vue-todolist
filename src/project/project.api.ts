export type project = {
  id?: string;
  title: string;
  description: string;
}

export const createProject = (data: project): Promise<project> => {
  return new Promise((resolve) => {
    const id = Math.random().toString()

    setTimeout(() => resolve({ ...data, id }), 100)
  })
}

export const editProject = (data: project): Promise<project> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 100)
  })
}
