import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const PokemonDetails = ({ pokemon }) => (
  <Card>
    <CardContent>
      <Typography>Id: {pokemon.id}</Typography>
      <Typography>Height: {pokemon.height}</Typography>
      <Typography>Weight {pokemon.weight}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default PokemonDetails;