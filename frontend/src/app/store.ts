import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import studentReducer from '../features/student/StudentSlice'
import staffReducer from '../features/staff/StaffSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
    staff: staffReducer
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
