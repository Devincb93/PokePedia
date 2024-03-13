import React from "react";
import { Link } from "react-router-dom"

function PokemonDisplay({ pokemons }) {
    return(
        <div>
        {pokemons.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <div className="home-poke-div">
                <h1>{pokemon.name}</h1>
                <img className="poke-image" src={pokemon.image} alt={pokemon.name}/>
                
              </div>
            </Link>
            ))}
            </div>
    )
        
    
} export default PokemonDisplay