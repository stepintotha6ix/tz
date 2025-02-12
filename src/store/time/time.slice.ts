import { createSlice } from '@reduxjs/toolkit';

const timeRangeSlice = createSlice({
  name: 'timeRange',
  initialState: {
    value: "allTime",
  },
  reducers: {
    updateFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFilter } = timeRangeSlice.actions;
export const selectFilter = (state: { timeRange: { value: string } }) => state.timeRange.value;

export const reducer = timeRangeSlice.reducer;
