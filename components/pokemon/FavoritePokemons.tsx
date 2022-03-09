import { Grid } from "@nextui-org/react";
import React, { FC } from "react";

import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface FavoritePokemonsProps {
  pokemons: number[];
}

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons: favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritePokemons.map((pokemonId) => (
        <FavoriteCardPokemon pokemonId={pokemonId} key={pokemonId} />
      ))}
    </Grid.Container>
  );
};
