import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonPage() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/pokemons/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [pokemonId]);

  if (!pokemon) return <h1>Loading...</h1>;

  return (
    <div className="poke-page-div">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      
    </div>
  );
}

export default PokemonPage;