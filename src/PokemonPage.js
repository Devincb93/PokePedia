import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from './CommentBox';


function PokemonPage() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();
  const { comment, setComment} = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pokemons/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [pokemonId]);
  
  console.log(comment)

  


  if (!pokemon) return <h1>Loading...</h1>;

  return (
    <div className="poke-page-div">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.type}</h2>
      <div className="poke-page-ability-div">
      {pokemon.abilities.map((ability, index) => (
        
        <h3 key={index}>{ability}</h3>
        
      ))}
      </div>
      <div>
        <CommentBox setComment={setComment}/>
      </div>
      

      
    </div>
  );
}

export default PokemonPage;