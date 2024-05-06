import { createReducer } from '@reduxjs/toolkit';

import {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
} from '../actions/tasksActions';

import { ITask } from '../../@types/coloc';

interface TasksState {
  tasksList: ITask[];
  loading: boolean;
  error: string | null;
}

export const initialState: TasksState = {
  tasksList: [],
  loading: false,
  error: null,
};

const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createTask.fulfilled, (state, action) => {
      state.loading = false;
      const updatedTasksList = [...state.tasksList, action.payload.task];
      updatedTasksList.sort(
        (a, b) =>
          new Date(a.due_date).getTime() - new Date(b.due_date).getTime()
      );
      state.tasksList = updatedTasksList;
      state.error = null;
    })
    .addCase(createTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    })
    .addCase(getAllTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasksList = action.payload.tasks;
      state.error = null;
    })
    .addCase(getAllTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message ?? null;
    })
    .addCase(deleteTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasksList = state.tasksList.filter(
        (task) => task.tasks_id !== action.payload.taskId
      );
    })
    .addCase(deleteTask.rejected, (state, action) => {
      state.loading = false;
      // state.error =
      // action.payload?.message ??
      // 'Une erreur est survenue lors de la suppression de la tâche.';
    })
    .addCase(updateTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.tasksList = state.tasksList.map((task) =>
        task.tasks_id === action.payload.updatedTask.tasks_id
          ? action.payload.updatedTask
          : task
      );
    })
    .addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.message ??
        'Une erreur est survenue lors de la mise à jour de la tâche';
    });
});

export default tasksReducer;
