import {configureStore} from '@reduxjs/toolkit';
import registerReducer from 'redux/reducer/register';

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
