import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi'

// const booksAdapter = createEntityAdapter({
//     // Assume IDs are stored in a field other than `book.id`
//     selectId: (book) => book.bookId,
//     // Keep the "all IDs" array sorted based on book titles
//     sortComparer: (a, b) => a.title.localeCompare(b.title),
//   })

interface Node {
    id: string; 
    pods: Pod[];
}

interface Pod {
id: string; 
    nodeId: string;
    containers: Container[];
}

interface Container {
    id: string;
    podId: string;
    image: string; 
}

export const nodesAdapter = createEntityAdapter<Node>();
export const podsAdapter = createEntityAdapter<Pod>();
export const containersAdapter = createEntityAdapter<Container>();

export const nodesSlice = createSlice({
    name: 'nodes', 
    initialState: nodesAdapter.getInitialState(),
    reducers: {}, 
    extraReducers: (builder) => {
        metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { nodes } }) => { 
            console.log('NODES', nodes)
        }
    }
})

export const podsSlice = createSlice({
    name: 'pods', 
    initialState: podsAdapter.getInitialState(),
    reducers: {}, 
    extraReducers: (builder) => {
        metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { nodes } }) => { 
        }
    }
})
  
export const containersSlice = createSlice({
    name: 'containers',
    initialState: containersAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { nodes } }) => {
        }
    }
});


export default metricsSlice.reducer;


