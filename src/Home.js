import React from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Home({pokemons}) {
    return (
        <div className="home-div">
            <nav>
                <h1>Home</h1>
                {pokemons.map((pokemon) =>(
                    <h2 key={pokemon.id}>{pokemon.name}</h2>
                ))}
            </nav>
        
        
        </div>
    )
}
export default Home;
