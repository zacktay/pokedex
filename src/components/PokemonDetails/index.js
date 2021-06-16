import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";

const PokemonDetails = ({ pokemon }) => (
  <Card>
    <CardContent>
      <CardMedia
        image={pokemon && pokemon.sprites && pokemon.sprites.front_default}
        style={{ height: "96px", width: "96px" }}
      />
      <Typography>Id: {pokemon.id}</Typography>
      <Typography>Height: {pokemon.height}</Typography>
      <Typography>Weight {pokemon.weight}</Typography>
      <Typography>
        Types:{" "}
        {pokemon &&
          pokemon.types &&
          pokemon.types.map(({ type: { name } }) => name).join(", ")}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default PokemonDetails;

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    sprites: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
  }),
};
