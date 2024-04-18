import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://662146cb3bf790e070b26eba.mockapi.io/';
const RESOURSE = 'adverts';

axios.defaults.baseURL = BASE_URL + RESOURSE;

const getApiData = async ({ url, thunkAPI }) => {
  try {
    const response = await axios.get(url);

    if (!response.data) throw new Error(response.statusText);

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => await getApiData({ mehod: 'get', thunkAPI: thunkAPI })
);
