import { configureStore } from '@reduxjs/toolkit';
import valuesReducer from './valuesSlice';

export const store = configureStore({
  reducer: {
    values: valuesReducer,
  },
});
