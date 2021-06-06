export enum Types {
  REQUEST_LOAD_PROJECTS = 'projects/request',
  SUCCESS_LOAD_PROJECTS = 'projects/success',
  FAIL_LOAD_PROJECTS = 'projects/fail'
}

export interface Project {
  id?: string;
  title: string;
  summary: string;
  tags?: string[];
  color?: string;
}

export interface State {
  data: Project[];
  loading: boolean;
  errors: unknown[];
}
