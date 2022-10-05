import { configureStore } from '@reduxjs/toolkit';
import challenge from './reducers/challenge';

export const store = configureStore({
  reducer: {
    challenge,
  },
});

export type RootState = ReturnType<typeof store.getState>;
