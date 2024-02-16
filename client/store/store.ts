import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { metricsApi } from '../services/api';
import {
  nodesSlice,
  podsSlice,
  containersSlice,
  metricsMapSlice,
  clusterEvents,
  appState,
} from './slice';

export const rootReducer = combineReducers({
  [metricsApi.reducerPath]: metricsApi.reducer,
  appState: appState.reducer,
  nodes: nodesSlice.reducer,
  pods: podsSlice.reducer,
  containers: containersSlice.reducer,
  metricsMap: metricsMapSlice.reducer,
  clusterEvents: clusterEvents.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(metricsApi.middleware),
});
