import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'http://knowledgebase.whf.bz/';

export const getAllPalettes = createAsyncThunk('getAllPalettes', async () => {
  const response = await fetch(`${BASE_URL}/?action=getColors`);
  try {
    const result = await response.json();

    return result.colors;
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
export const getPopular = (state) => {
  //return state.colors.palettes
  let pl = [...state.colors.palettes];
  return pl.sort((a, b) => parseInt(b.likes) - parseInt(a.likes))
}
export default paletteSlice.reducer;