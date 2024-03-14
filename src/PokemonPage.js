import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function PokemonPage({pokemons}) {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();
  

  useEffect(() => {
    const singlePokemon = pokemons.find((pokemon) => pokemon.id === pokemonId)
    setPokemon(singlePokemon)
}, [pokemonId]);

  if (!pokemon) return <h1>Please wait...</h1>;
  return (
    <div className="poke-page-div">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.type}</h2>
      <div className="poke-page-ability-div">
        <h3>{pokemon.abilities}</h3>
        <p>{pokemon.about}</p>
      </div>
    </div>
  );
}

export default PokemonPage;