import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ pokemons, setPokemons}) {

  const [newPokemon, setNewPokemon] = useState({
    "id": "",
    "name": "",
    "image": "",
    "type": "",
    "base_experience": "",
    "abilities": "",
    "about": ""


});

  // function handleNewName(e) {
  //   setNewPokemon(e.target.value)
  // }
  // function handleNewImage(e) {
  //   setNewPokemon(e.target.value)
  // }
  // function handleNewType(e) {
  //   setNewPokemon(e.target.value)
  // }
  // function handleNewBaseExp(e) {
  //   setNewPokemon(e.target.value)
  // }
  // function handleNewAbilities(e) {
  //   setNewPokemon(e.target.value)
  // }
 

  function handleSubmit(e) {
    e.preventDefault();

    const  newPokemonId = pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 151 + 1;
    const  newPokemonsOId = {...newPokemon, id: newPokemonId};
    
    setPokemons([...pokemons, newPokemonsOId])
    fetch('http://localhost:3001/pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon)
    })
    
  }

   function handleChange(e) {
    const { name, value } = e.target;
    setNewPokemon(prevState => ({
      ...prevState,
      [name]: value,
    }
    ))
}

  
  console.log("newPoke",newPokemon)

  return (
    <div className="home-div">
      <h1>Home</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <h4>Enter your Pokemon's name:</h4>
        <input onChange={handleChange} name="name" type="text" placeholder="Pokemon Name" value={newPokemon.name}></input>
        <h4>Enter your Pokemon's image url:</h4>
        <input onChange={handleChange} name="image" type="text" placeholder="Image url" value={newPokemon.image}></input>
        <h4>Enter your Pokemon's type:</h4>
        <input onChange={handleChange} name="type" type="text" placeholder="Pokemon type" value={newPokemon.type}></input>
        <h4>Enter your Pokemon's base experience:</h4>
        <input onChange={handleChange} name="base_experience" type="text" placeholder="Pokemon's base experience" value={newPokemon.base_experience}></input>
        <h4>Enter your Pokemon's abilities:</h4>
        <input onChange={handleChange} name="abilities" type="text" placeholder="Pokemon's abilities" value={newPokemon.abilities}></input>
        <h4>Enter your Pokemon's about me:</h4>
        <input onChange={handleChange} name="about" type="text" placeholder="Pokemon's about me" value={newPokemon.about}></input>
        <div >
          <button className="button-style" type="submit">Submit</button>
        </div>
        </form>
      </div>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
          <div className="home-poke-div">
            <h1>{pokemon.name}</h1>
            <img className="poke-image" src={pokemon.image} alt={pokemon.name}/>
            
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;