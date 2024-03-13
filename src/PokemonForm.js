import React from "react";

function PokemonForm({ handleChange, handleSubmit, newPokemon}) {
    return(
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

    )
}
export default PokemonForm