import NavBar from './NavBar';
import React, { useState, useEffect } from 'react'
import Home from './Home'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import PokemonPage from './PokemonPage';
import './styles.css'
import ReadMe from './ReadMe'
import About from './About'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState([])


  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
  .then(r => r.json())
  .then(data => {setPokemons(data)
  console.log(pokemons)})
}, [])

function handleClick(pokemon) {
  setSelectedPokemon(pokemon)
  console.log( "data",selectedPokemon)

}

  return (
  <div className="app">
    <BrowserRouter> 
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home handleClick={handleClick} pokemons={pokemons} selectedPokemon={selectedPokemon}/>}/>
      <Route exact path="/PokemonPage" element={<PokemonPage selectedPokemon={selectedPokemon} pokemons={pokemons}/>}/>
      <Route exact path="/about" element={<About pokemons={pokemons}/>}/>
      <Route exact path="/readme" element={<ReadMe pokemons={pokemons}/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
