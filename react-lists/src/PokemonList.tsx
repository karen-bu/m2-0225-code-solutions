import type { Pokemon } from './App';

type PokedexProps = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: PokedexProps) {
  const pokemonListItem = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{pokemonListItem}</ul>;
}
