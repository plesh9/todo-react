import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import taskSlise from '../features/taskSlise';

export const store = configureStore({
  reducer: {
    tasks: taskSlise
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
