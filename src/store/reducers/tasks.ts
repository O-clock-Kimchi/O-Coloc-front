import { createReducer } from '@reduxjs/toolkit';
import { createTask, getAllTasks } from '../action/actions';

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
      state.tasksList = [...state.tasksList, action.payload.task];
    })
    .addCase(createTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message ?? null;
    })
    .addCase(getAllTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasksList = action.payload.tasks;
    })
    .addCase(getAllTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message ?? null;
    });
});

export default tasksReducer;
