import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonForm from "./PokemonForm"
import PokemonDisplay from './PokemonDisplay';

function Home({ pokemons, setPokemons, addNewPokemon}) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    image: "",
    type: "",
    base_experience: "",
    abilities: "",
    about: ""
  });

  function handleSubmit(e) {
    e.preventDefault()
    if ((newPokemon.name.length > 1)
        &&
        (newPokemon.image.length > 1)
        &&
        (newPokemon.type.length > 1) 
        &&
        (newPokemon.base_experience.length > 1)
        && 
        (newPokemon.about.length > 1)
        && 
        (newPokemon.abilities.length > 1))   {
     
    
    fetch('http://localhost:3001/pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon)})
    .then(resp => resp.json())
    .then ((data) => {
    addNewPokemon(data)
   })
    setNewPokemon({
      name: "",
      image: "",
      type: "",
      base_experience: "",
      abilities: "",
      about: ""
    })}
  }

   function handleChange(e) {
    const { name, value } = e.target;
    setNewPokemon(prevState => ({
      ...prevState,
      [name]: value,
    }))
}
console.log(pokemons)
  return (
    <div className="home-div">
      <h1>Home</h1>
      <PokemonForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      newPokemon={newPokemon}
      />
      <PokemonDisplay 
      pokemons={pokemons}
      />
    </div>
  );
}

export default Home;