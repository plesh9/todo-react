import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosSlise from '../features/todos/todosSlise';

export const store = configureStore({
  reducer: {
    todoList: todosSlise
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
