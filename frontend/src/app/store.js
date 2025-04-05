import { configureStore } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGroups, fetchMetrics } from '../api/api.js';

const getGroups = createAsyncThunk('groups/getGroups', async () => {
  const response = await fetchGroups();
  return response;
});

const getMetrics = createAsyncThunk('metrics/getMetrics', async () => {
  const response = await fetchMetrics();
  return response;
});

const groupsSlice = createSlice({
  name: 'groups',
  initialState: {
    data: [],
    selectedGroup: null,
    status: 'idle',
  },
  reducers: {
    selectGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGroups.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getGroups.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    data: [],
    selectedNode: null,
    status: 'idle',
  },
  reducers: {
    selectNode: (state, action) => {
      state.selectedNode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMetrics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMetrics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getMetrics.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const store = configureStore({
  reducer: {
    groups: groupsSlice.reducer,
    metrics: metricsSlice.reducer,
  },
});