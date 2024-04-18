import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { fetchAdverts } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.items = action.payload;
          state.error = null;
        });
      })

      .addCase(fetchAdverts.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })

      .addCase(fetchAdverts.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
