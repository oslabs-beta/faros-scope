import { createSlice } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi';
import { current } from '@reduxjs/toolkit';

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
  extraReducers: (builder) => {
    builder.addMatcher(
      metricsApi.endpoints.getClusterInfo.matchFulfilled,
      (state, { payload: { result } }) => {
        console.log('This is from inside the metrics slice: ', result);
        console.log(current(state));
        console.log("Gian Marco!");
      },
    );
  },
});

export default metricsSlice.reducer;
export const { setMetrics } = metricsSlice.actions;
