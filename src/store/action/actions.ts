import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';
import { IUser, ITask } from '../../@types/coloc';

// USER-RELATED ACTIONS

// Login action
const LOGIN = 'LOGIN';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponseData {
  message: string;
  user: {
    user_id: number;
    firstname: string;
    current_coloc_id: number;
    color: string;
    email: string;
  };
}

export const login = createAsyncThunk<
  LoginResponseData,
  LoginFormData,
  {
    rejectValue: { message: string };
  }
>(LOGIN, async (loginFormData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/login', loginFormData);

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Logout action
const LOGOUT = 'LOGOUT';

export const logout = createAsyncThunk(
  LOGOUT,
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/user/${userId}/logout`);

      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Signup action
const SIGNUP = 'SIGNUP';

interface SignupData {
  firstname: string;
  email: string;
  password: string;
  color: string;
}

export const signup = createAsyncThunk<
  {
    status: number;
  },
  SignupData,
  {
    rejectValue: { status: number };
  }
>(SIGNUP, async (signupData: SignupData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/signup', signupData);
    return { status: response.status };
  } catch (error: any) {
    return rejectWithValue({ status: error.response.status });
  }
});

// Update user action

const UPDATE_USER = 'UPDATE_USER';

interface UpdateDataUser {
  firstname: string;
  email: string;
  color: string;
}

interface UpdateUserWithId {
  userId: number;
  updateDataUser: UpdateDataUser;
}

export const updateUser = createAsyncThunk(
  UPDATE_USER,
  async ({ userId, updateDataUser }: UpdateUserWithId) => {
    const response = await axiosInstance.put(
      `/user/${userId}/profile`,
      updateDataUser
    );
    console.log(response.data);
    return response.data;
  }
);

interface FormField {
  value: string;
  name: 'email' | 'firstname' | 'color';
}

const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = createAction<FormField>(CHANGE_FIELD);

// Destroy account

// /user/5/delete

const DESTROY_USER = 'DESTROY_USER';

export const destroyUser = createAsyncThunk(
  DESTROY_USER,
  async (userId: number) => {
    const response = await axiosInstance.delete(`user/${userId}/delete`);
    console.log(response.data);
    return response.data;
  }
);

// COLOC RELATED ACTIONS

// Created Coloc

const CREATE_COLOC = 'CREATE_COLOC';

interface GetColocData {
  name: string;
  coloc_id: number;
}

interface CreateFormData {
  name: string;
}

export const createColoc = createAsyncThunk<GetColocData, CreateFormData>(
  CREATE_COLOC,
  async (createFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/colocs/create`,
        createFormData
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Votre nom de coloc n'est pas correct");
    }
  }
);

// Join Coloc

const JOIN_COLOC = 'JOIN_COLOC';

interface GetJoinData {
  coloc_id: number;
  name: string;
}

interface PostFormData {
  groupe_code_valid: string;
}

export const joinColoc = createAsyncThunk<GetJoinData, PostFormData>(
  JOIN_COLOC,
  async (postFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/colocs/join`, postFormData);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Get Coloc

const GET_COLOC = 'GET_COLOC';

interface GetDataFromColoc {
  coloc_id: number;
  name: string;
  groupe_code_valid: string;
}

export const getColoc = createAsyncThunk<GetDataFromColoc, number>(
  GET_COLOC,
  async (colocId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/colocs/${colocId}`);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Leave coloc
// colocsRouter.post('/colocs/:id/leave', colocController.handleUserLeave);

const LEAVE_COLOC = 'LEAVE_COLOC';

export const leaveColoc = createAsyncThunk(
  LEAVE_COLOC,
  async (colocId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`colocs/${colocId}/leave`);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Update Coloc for the name

const UPDATE_NAME_COLOC = 'UPDATE_NAME_COLOC';

interface UpdateColocName {
  colocId: number;
  name: string;
}

export const updateNameColoc = createAsyncThunk(
  UPDATE_NAME_COLOC,
  async ({ colocId, name }: UpdateColocName, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/colocs/${colocId}`, {
        name,
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

const CHANGE_NAME = 'CHANGE_NAME';

export const changeName = createAction<{ name: string }>(CHANGE_NAME);

// Update coloc for the code

// colocsRouter.patch('/colocs/:id/code', colocController.generateNewCode);

// coloc.update({ lien_coloc: code, groupe_code_valid: code });

const GENERATE_NEW_CODE = 'GENERATE_NEW_CODE';

export const generateNewCode = createAsyncThunk<{ newCode: string }, number>(
  GENERATE_NEW_CODE,
  async (colocId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/colocs/${colocId}/code`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Get flatmates' list

const GET_FLATMATES_LIST = 'GET_FLATMATES_LIST';

interface FlatmatesListResponse {
  user_id: number;
  firstname: string;
  color: string;
  email: '';
  password: '';
  id_coloc: number;
}
export const getFlatmates = createAsyncThunk<FlatmatesListResponse[], number>(
  GET_FLATMATES_LIST,
  async (colocId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<FlatmatesListResponse[]>(
        `/colocs/${colocId}/users`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// TASKS RELATED ACTIONS

// Create task action
const CREATE_TASK = 'CREATE_TASK';

interface CreateTaskResponseData {
  message: string;
  status: number;
  task: {
    // request update to task_id!!!
    tasks_id: number;
    description: string;
    is_done: boolean;
    frequency: number;
    created_at: string;
    due_date: string;
    user_id: number;
  };
}

interface CreateTaskFormData {
  description: string;
  frequency: number;
  user_id: number;
  is_done: boolean;
}

export const createTask = createAsyncThunk<
  CreateTaskResponseData,
  CreateTaskFormData,
  {
    rejectValue: { message: string; status: number };
  }
>(CREATE_TASK, async (taskData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/tasks', taskData);
    return {
      status: response.status,
      message: 'Task created successfully',
      task: response.data.task,
    };
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
    console.log('tâche pas ok');
    return rejectWithValue({
      message: 'Une erreur est survenue',
      status: 500,
    });
  }
});

// Get tasks' list
const GET_TASKS_LIST = 'GET_TASKS_LIST';

interface TasksListResponse {
  message: string | null;
  status: number;
  tasks: ITask[];
}

export const getAllTasks = createAsyncThunk<
  TasksListResponse,
  number,
  {
    rejectValue: { message: string; status: number };
  }
>(GET_TASKS_LIST, async (colocId: number, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<ITask[]>(
      `/colocs/${colocId}/tasks`
    );
    console.log('Loading successful:', response);
    return {
      message: response.statusText,
      status: response.status,
      tasks: response.data,
    };
  } catch (error: any) {
    console.log('An error occurred while loading tasks:', error);
    return rejectWithValue({
      message: error.response.message,
      status: error.response.status,
    });
  }
});

// Delete task

const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = createAsyncThunk(
  DELETE_TASK,
  async (taskId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/tasks/${taskId}`);
      console.log('Deleted task:', taskId);
      console.log('Response status:', response.status);
      return { taskId, status: response.status };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update task
const UPDATE_TASK = 'UPDATE_TASK';

interface UpdateTaskResponseData {
  message: string;
  status: number;
  updatedTask: ITask;
}

interface UpdateTaskFormData {
  // request update
  tasks_id: number;
  description: string;
  frequency: number;
  user_id: number;
  is_done: boolean;
}

export const updateTask = createAsyncThunk<
  UpdateTaskResponseData,
  UpdateTaskFormData,
  {
    rejectValue: { message: string; status: number };
  }
>(UPDATE_TASK, async (taskData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put(
      `/tasks/${taskData.tasks_id}`,
      taskData
    );
    return {
      status: response.status,
      message: 'Task updated successfully',
      updatedTask: response.data.updatedTask,
    };
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
    console.log('Erreur lors de la mise à jour de la tâche');
    return rejectWithValue({
      message: 'Une erreur est survenue lors de la mise à jour de la tâche',
      status: 500,
    });
  }
});
