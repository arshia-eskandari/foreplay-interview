import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITest {
  count: number;
}

const initialState: ITest = {
  count: 0,
}

const testSlice = createSlice(({
  name: "test",
  initialState,
  reducers: {
    increaseCountBy: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    }
  }
}));

export const { increaseCountBy } = testSlice.actions;

export default testSlice.reducer;