import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import spaceGetData from '../service/spaceService';

interface ApiState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ApiState = {
    data: null,
    status: 'idle',
    error: null,
};

export const fetchApiData = createAsyncThunk('api/fetchApiData', async () => {

    const response = await spaceGetData()
    return response.data;
});

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApiData.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default apiSlice.reducer;

export const selectApiData = (state: RootState) => state.api;
