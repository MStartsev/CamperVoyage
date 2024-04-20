import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    addFavorite(state, { payload }) {
      const favorites = [...state.favorites, payload];
      return { ...state, favorites: favorites };
    },
    removeFavorite(state, { payload }) {
      const favorites = state.favorites.filter(advert => advert.id !== payload);
      return { ...state, favorites: favorites };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
