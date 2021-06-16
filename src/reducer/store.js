import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "./pokedexSlice";

export default configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
});
