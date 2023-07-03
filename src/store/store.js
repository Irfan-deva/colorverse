import { configureStore } from "@reduxjs/toolkit";
import palettesReducer from '../features/palette/paletteSlice'

export const store = configureStore({
  reducer: {
    colors: palettesReducer
  }

});