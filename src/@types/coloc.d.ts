export interface IUser {
  user_id: number;
  firstname: string;
  email: string;
  password: string;
  color: string;
  id_coloc: number;
}

export interface IColoc {
  id: null | number;
  name: string;
  code_validation: number;
  created_at: number;
  link: string;
}

export interface ITask {
  tasks_id: number;
  description: string;
  created_at: string;
  is_done: boolean;
  frequency: number;
  due_date: string;
  user_id: number;
}

// data for flatmates (flatmates in coloc other than current logged in user)

export interface IFlatmate {
  user_id: number;
  firstname: string;
  color: string;
}
