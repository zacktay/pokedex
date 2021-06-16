import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import PokemonDetails from "../PokemonDetails";
import {
  getPokemon,
  selectIsLoading,
  selectPokemon,
} from "../../reducer/pokedexSlice";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");

  const dispatch = useDispatch();
  const showProgress = useSelector(selectIsLoading);
  const pokemon = useSelector(selectPokemon);

  return (
    <>
      {showProgress && <CircularProgress />}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <TextField
              label="Name of Pokemon"
              onChange={({ target: { value } }) => setPokemonName(value)}
            />
            <Button
              variant="contained"
              color="primary"
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
