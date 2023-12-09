import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi';
import { nodesSlice, podsSlice, containersSlice,metricsMapSlice, clusterEvents } from './metricsSlice';

const rootReducer = combineReducers({
    [metricsApi.reducerPath]: metricsApi.reducer,
    nodes: nodesSlice.reducer,
    pods: podsSlice.reducer,
    containers: containersSlice.reducer,
    metricsMap: metricsMapSlice.reducer,
    clusterEvents: clusterEvents.reducer
});
  
const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi.middleware), 
})

export default store;

export type RootState = ReturnType<typeof rootReducer>;