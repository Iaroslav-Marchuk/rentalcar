import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../services/api.js';

export const getAllCars = createAsyncThunk(
  'catalog/getAllCars',
  async (params, thunkAPI) => {
    try {
      const response = await axiosAPI.get('/cars', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCarById = createAsyncThunk(
  'catalog/getCarById',
  async (carId, thunkAPI) => {
    try {
      const response = await axiosAPI.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
