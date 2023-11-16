import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status } from 'types/enums/status';
import { Task, TasksState } from 'types/tasks';

import { isDateExpired } from 'utils/dateUtils';

const loadTasksFromLocalStorage = (): TasksState => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : { tasks: [], deletedTasks: [] };
};

const saveTasksToLocalStorage = (tasksState: TasksState) => {
  localStorage.setItem('tasks', JSON.stringify(tasksState));
};

const initialState: TasksState = loadTasksFromLocalStorage();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveTasksToLocalStorage(state);
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        const deletedTask = state.tasks[index];
        deletedTask.status = Status.REMOVED;
        state.deletedTasks.push(deletedTask);
        state.tasks.splice(index, 1);
        saveTasksToLocalStorage(state);
      }
    },
    toggleCompleteTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);

      if (index !== -1) {
        const completed = state.tasks[index].status === Status.COMPLETED;
        const expired = isDateExpired(state.tasks[index].deadline);
        state.tasks[index].status = !completed
          ? Status.COMPLETED
          : expired
          ? Status.OVERDUE
          : Status.PENDING;
        saveTasksToLocalStorage(state);
      }
    },
  },
});

export const { addTask, editTask, removeTask, toggleCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
