import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://irfandevsportfolio.000webhostapp.com/colorverse/api';

export const getAllPalettes = createAsyncThunk('getAllPalettes', async () => {
  const response = await fetch(`${BASE_URL}/?action=getAllPalettes`);
  try {
    const result = await response.json();

    return result;
  } catch (error) {

    return error;
  }
})

export const paletteSlice = createSlice({
  name: 'color_palettes',
  initialState: {
    palettes: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPalettes.fulfilled, (state, action) => {
      state.palettes = (action.payload);
    })

  }
});
export default paletteSlice.reducer;