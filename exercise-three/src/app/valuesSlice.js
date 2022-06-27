import { createSlice } from '@reduxjs/toolkit';

const initialState = { a: 1, b: 2, c: 3 };

export const valuesSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    randomizeA: (state) => {
      state.a = Math.floor(Math.random() * 100);
    },
    randomizeB: (state) => {
      state.b = Math.floor(Math.random() * 100);
    },
    randomizeC: (state) => {
      state.c = Math.floor(Math.random() * 100);
    },
  },
  extraReducers: {},
});

export const { randomizeA, randomizeB, randomizeC } = valuesSlice.actions;
export const selectA = (state) => state.values.a;
export const selectB = (state) => state.values.b;
export const selectC = (state) => state.values.c;

export default valuesSlice.reducer;
