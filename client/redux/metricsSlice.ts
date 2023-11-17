import { createSlice } from '@reduxjs/toolkit';

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    metrics: {},
  },
  reducers: {
    setMetrics(state, action) {
      state.metrics = action.payload;
    },
  },
});

export default metricsSlice.reducer;
export const { setMetrics } = metricsSlice.actions;
