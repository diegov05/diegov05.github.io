import React, { useState } from 'react'
import { PokemonInfo } from "../../components"
import "./Pokemon.css"

const pokemons = require("../../constants/data.json");


const Pokemon = () => {

    const getInitialPokemon = () => {
        const currentPkmn = pokemons[0].id;
        return currentPkmn;
    };

    const [currentPkmn, setPokemon] = useState(getInitialPokemon);

    const handleChange = (e) => {
        setPokemon(e.target.value)
    }

    return (
        <div className='app__wrapper-pokemon section__padding'>
            <div className='app__wrapper-pokemon_selectbar'>
                <h2 className='subtitle'>select a pokemon:</h2>
                <select name="pokemons" id="pokemons" className='subtitle' onChange={handleChange}>
                    {pokemons.map((pkmn) => {
                        return (
                            <option value={pkmn.id} key={pkmn.num} className='subtitle' style={{ fontSize: 12 }}>
                                {pkmn.num} {pkmn.name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className='app__wrapper-pokemon_pokemoninfo'>
                <PokemonInfo currentPkmnId={currentPkmn} />
            </div>
        </div>
    )
}

export default Pokemon;