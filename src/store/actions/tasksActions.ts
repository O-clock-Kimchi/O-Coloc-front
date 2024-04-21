import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';
import { ITask } from '../../@types/coloc';

// Create task
const CREATE_TASK = 'CREATE_TASK';

interface CreateTaskResponseData {
  message: string;
  status: number;
  task: {
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
      message: response.data.message,
      task: response.data.task,
    };
  } catch (error: any) {
    return rejectWithValue({
      message: 'Une erreur est survenue',
      status: error.response.status,
    });
  }
});

// Get list of tasks (all flatmates included)

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
    // sorting tasksList by date (code snippet from: https://www.geeksforgeeks.org/sort-an-object-array-by-date-in-javascript/)
    const sortedTasksList = response.data.sort((a, b) => {
      // // convert due dates from string to date object
      const dateA = new Date(a.due_date);
      const dateB = new Date(b.due_date);
      // check dates validity
      if (Number.isNaN(dateA.getTime()) || Number.isNaN(dateB.getTime())) {
        return 0;
      }
      return dateA.getTime() - dateB.getTime();
    });
    return {
      message: response.statusText,
      status: response.status,
      tasks: sortedTasksList,
    };
  } catch (error: any) {
    return rejectWithValue({
      message: error.response.message,
      status: error.response.status,
    });
  }
});

// Delete task

const DELETE_TASK = 'DELETE_TASK';

interface DeleteTaskResponse {
  taskId: number;
  status: number;
}

export const deleteTask = createAsyncThunk<
  DeleteTaskResponse,
  number,
  { rejectValue: { status: number } }
>(DELETE_TASK, async (taskId: number, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`);
    return { taskId, status: response.status };
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Update task

const UPDATE_TASK = 'UPDATE_TASK';

interface UpdateTaskResponseData {
  message: string;
  status: number;
  updatedTask: ITask;
}

interface UpdateTaskFormData {
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
    return rejectWithValue({
      message: error.response.data.message,
      status: error.response.status,
    });
  }
});
