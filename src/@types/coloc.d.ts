export interface IUser {
  id: number;
  firstname: string;
  email: string;
  password: string;
  color: string;
  id_coloc: number;
}

export interface IColoc {
  id: number;
  name: string;
  code_validation: number;
  created_at: string;
  link: string;
}
