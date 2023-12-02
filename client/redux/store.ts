import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import metricsReducer from './metricsSlice';
import { metricsApi, nodesAdapter, podsAdapter, containersAdapter} from './metricsApi';
import { getDefaultAutoSelectFamily } from 'net';

// Combine reducers
// const rootReducer = combineReducers({
//     [metricsApi.reducerPath]: metricsApi.reducer,
//     nodes: nodesAdapter.getInitialState(),
//     pods: podsAdapter.getInitialState(),
//     containers: containersAdapter.getInitialState(),
// });
  
const store = configureStore({
    reducer: {
        [metricsApi.reducerPath]: metricsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi.middleware), 
})

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi.middleware),
// });


// ^ We create a custom hook, useAppSelector, to access state throughout our app 
// export type RootState = ReturnType<typeof store.getState>
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
