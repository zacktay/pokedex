import React, { useState } from "react";
import { getPokemon, selectPokemon } from "../../reducer/pokedexSlice";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PokemonDetails from "../PokemonDetails";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");

  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);

  return (
    <>
      <AppBar position="static">
        <Typography variant="h6">Pokedex</Typography>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <TextField
              label="Name of Pokemon"
              onChange={({ target: { value } }) => setPokemonName(value)}
            />
            <Button
              variant="contained"
              color="secondary"
              disabled={pokemonName === ""}
              onClick={() => dispatch(getPokemon(pokemonName))}
            >
              Search
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <PokemonDetails pokemon={pokemon} />
        </Grid>
      </Grid>
    </>
  );
};

export default Pokedex;
