import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi';
import { nodesSlice, podsSlice, containersSlice } from './metricsSlice';
import { getDefaultAutoSelectFamily } from 'net';

// Combine reducers
const rootReducer = combineReducers({
    [metricsApi.reducerPath]: metricsApi.reducer,
    nodes: nodesSlice.reducer,
    pods: podsSlice.reducer,
    containers: containersSlice.reducer,
});
  
const store = configureStore({
    // reducer: {
    //     [metricsApi.reducerPath]: metricsApi.reducer,
    // },
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi.middleware), 
})

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi.middleware),
// });


export default store;
