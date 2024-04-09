export interface IUser {
  id: number;
  firstname: string;
  email: string;
  password: string;
  color: string;
  id_coloc: number | null;
}

export interface IColoc {
  id: null | number;
  name: string;
  code_validation: number;
  created_at: number;
  link: string;
}
