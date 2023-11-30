import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './metricsSlice';
import {metricsApi} from './metricsApi'

const store = configureStore({
  reducer: {
    [metricsApi.reducerPath] : metricsApi.reducer,
    metrics: metricsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi.middleware),
});

export default store;
