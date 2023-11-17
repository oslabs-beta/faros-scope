import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './metricsSlice';

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
