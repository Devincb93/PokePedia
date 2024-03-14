import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import PokemonPage from './PokemonPage';
import About from './About';
import ReadMe from './ReadMe';
import './styles.css';

function App() {
  
  const [pokemons, setPokemons] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
      .then(response => response.json())
      .then(data => setPokemons(data));
  }, []);

  function addNewPokemon(createdPokemon) {
    setPokemons([...pokemons, createdPokemon])
  }
 
  return (
    <div className="app">
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home addNewPokemon={addNewPokemon}  pokemons={pokemons} />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonPage pokemons={pokemons}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/readme" element={<ReadMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;