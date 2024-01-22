

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

  useEffect(() => {
    fetch("http://localhost:3000/pokemons")
  .then(r => r.json())
  .then(data => {setPokemons(data)
  console.log(pokemons)})
}, [])

  return (
  <div className="app">
    <BrowserRouter> 
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home pokemons={pokemons}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/PokemonPage" element={<PokemonPage pokemons={pokemons}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/about" element={<About pokemons={pokemons}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/readme" element={<ReadMe pokemons={pokemons}/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
