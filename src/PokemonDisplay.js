import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function PokemonDisplay({ pokemons, addNewPokemon }) {



  

 if (!pokemons) return null
    return(
        <div>
        {pokemons.map((pokemon) => (
            <Link addNewPokemon={addNewPokemon} key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <div className="home-poke-div">
                <h1>{pokemon.name}</h1>
                <img className="poke-image" src={pokemon.image} alt={pokemon.name}/>
                
              </div>
            </Link>
            ))}
            </div>
    )
        
    
} export default PokemonDisplay