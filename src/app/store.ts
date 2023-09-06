import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosSlise from '../features/todosSlise';

export const store = configureStore({
  reducer: {
    todos: todosSlise
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
