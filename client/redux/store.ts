import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi';
import { clusterEvents, containersSlice, metricsMapSlice, nodesSlice, podsSlice } from './metricsSlice';
import { useDispatch } from 'react-redux';

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

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch:()=> AppDispatch = useDispatch