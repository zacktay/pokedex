import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPokemon = createAsyncThunk(
  "pokedex/searchPokemon",
  async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    const response = await fetch(url);
    return response.json();
  }
);

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    isLoading: false,
    error: null,
    pokemon: {
      id: null,
      weight: "N.A",
      height: "N.A",
      types: [],
      sprites: [],
    },
  },
  reducers: {},
  extraReducers: {
    [getPokemon.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPokemon.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pokemon = action.payload;
    },
    [getPokemon.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
// export const {} = pokedexSlice.actions;

export default pokedexSlice.reducer;

export const selectIsLoading = (state) => state.pokedex.isLoading;
export const selectPokemon = (state) => state.pokedex.pokemon;
