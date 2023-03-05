import React from 'react';
import "./PokemonInfo.css"
import { images } from "../../constants"

const pokemons = require("../../constants/data.json");

const lowWeight = 22
const heavyWeight = 69

const shortHeight = 1
const tallHeight = 2


const lowChance = 0.7
const highChance = 10


const PokemonInfo = ({ currentPkmnId }) => {
    const pokemon = pokemons[currentPkmnId - 1];
    return (
        <div className='app__pokemoninfo-wrapper'>
            <div className='app__pokemoninfo-pokemon'>
                <h1 className='headtext'>{pokemon.name}</h1>
                <img src={pokemon.img} alt="pokemon" />
                <div className="app__pokemoninfo-pokemon_attributes-container">
                    <div className="app__pokemoninfo-pokemon_attributes-headings">
                        <div className='app__pokemoninfo-pokemon_type-heading'>
                            <h2 className='subtitle'>Type</h2>
                        </div>
                        <div className='app__pokemoninfo-pokemon_weakness-heading'>
                            <h2 className='subtitle'>Weakness</h2>
                        </div>
                    </div>
                    <div className='app__pokemoninfo-pokemon_attributes-info'>
                        <div className='app__pokemoninfo-pokemon_types-info'>{pokemon.type.map((type) => {
                            return (
                                <button className="type__button" style={{ backgroundColor: `var(--${type.toLowerCase()}-type-color)` }}>{type}</button>
                            )
                        })}</div>
                        <div className='app__pokemoninfo-pokemon_weakness-info'>{pokemon.weaknesses.filter((e, i) => i < 2).map((weakness) => {
                            return (
                                <button className="type__button" style={{ backgroundColor: `var(--${weakness.toLowerCase()}-type-color)` }}>{weakness}</button>
                            )
                        })}</div>
                    </div>
                </div>
            </div>
            <div className="app__pokemoninfo-facts">
                <div className='app__pokemoninfo-facts_columns'>
                    <div>
                        <h2 className='subtitle'>weight</h2>
                        <p className='paragraph'>{pokemon.weight}  <span className='subtitle' style={{ color: parseFloat(pokemon.weight) > lowWeight && parseFloat(pokemon.weight) < heavyWeight ? 'var(--electric-type-color)' : parseFloat(pokemon.weight) > heavyWeight ? "var(--fire-type-color)" : "var(--grass-type-color)" }}>{parseFloat(pokemon.weight) > lowWeight && parseFloat(pokemon.weight) < heavyWeight ? "Medium" : parseFloat(pokemon.weight) > heavyWeight ? "Heavy" : "Low"}</span></p>
                    </div>
                    <div>
                        <h2 className="subtitle">candy</h2>
                        <p className="paragraph">{pokemon.candy}<span><img src={images.rareCandy} alt="candy" /></span></p>
                    </div>
                    <div>
                        <h2 className="subtitle">spawn chance</h2>
                        <p className="paragraph">{pokemon.spawn_chance}% <span className='subtitle' style={{ color: pokemon.spawn_chance > lowChance && pokemon.spawn_chance < highChance ? 'var(--electric-type-color)' : pokemon.spawn_chance > highChance ? "var(--grass-type-color)" : "var(--fire-type-color)" }}>{pokemon.spawn_chance > lowChance && pokemon.spawn_chance < highChance ? 'Common' : pokemon.spawn_chance > highChance ? "Very Common" : "Rare"}</span></p>
                    </div>
                </div>
                <div className='app__pokemoninfo-facts_columns'>
                    <div>
                        <h2 className='subtitle'>height</h2>
                        <p className='paragraph'>{pokemon.height}<span className='subtitle' style={{ color: parseFloat(pokemon.height) > shortHeight && parseFloat(pokemon.height) < tallHeight ? 'var(--electric-type-color)' : parseFloat(pokemon.height) > tallHeight ? "var(--grass-type-color)" : "var(--fire-type-color)" }}>{parseFloat(pokemon.height) > shortHeight && parseFloat(pokemon.height) < tallHeight ? "Medium" : parseFloat(pokemon.height) > tallHeight ? "Tall" : "Short"}</span></p>
                    </div>
                    <div>
                        <h2 className="subtitle">egg</h2>
                        <p className="paragraph">{pokemon.egg} <span><img src={images.egg} alt="egg" /></span></p>
                    </div>
                    <div>
                        <h2 className="subtitle">spawn time</h2>
                        <p className="paragraph">{pokemon.spawn_time} <span className='subtitle'>{parseInt(pokemon.spawn_time) > 7 && parseInt(pokemon.spawn_time) < 18 ? '🌤️' : parseInt(pokemon.spawn_time) > 18 ? "🌙" : "🌑"}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo;
