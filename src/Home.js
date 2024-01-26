import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import PokemonPage from './PokemonPage'


function Home({pokemons, handleClick}) {
    
  
    return (
        <div className="home-div">

            <div>
                <h1>Home</h1>
                
                {pokemons.map((pokemon) =>(
                    // <Link key={pokemon.id}to="./PokemonPage">
                    <div key={pokemon.id} onClick={()=>handleClick(pokemon)} className="home-poke-div">
                    <h1 >{pokemon.name}</h1>
                    <img className="poke-image"src={pokemon.image} alt={pokemon.name}/>
                    <ul>Pokemon Type: {pokemon.type}</ul>
                    <ul>Pokemon base experience: {pokemon.base_experience}</ul>
                    <h4>Abilities</h4>
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}
                    </div>
                    // </Link>
                    
                ))}
            </div>
        
        
        </div>
    )
}
export default Home;
