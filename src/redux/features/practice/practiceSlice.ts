import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count++;
    },
    decreaseCount: (state) => {
      state.count--;
    },
  },
});

export const { increaseCount, decreaseCount } = counterSlice.actions;

export default counterSlice.reducer;
