import React, { useEffect, useState } from 'react';
import { getPaginationPokemon } from '../Api/api';
import Search from '../components/BuscarPokemon/searchPokemon'
import ListPokemon from '../components/ListPokemon/ListPokemon';
import Pokemon from '../components/Pokemon/Pokemon';
import usePokemon from '../Hooks/usePokemon';
import './MainPage.css'

function MainPage() {
  const { selectPokemon, setPokemons, pokemons, nextPokemon, previusPokemon, setNextPokemon, setPreviusPokemon } = usePokemon()


  const handlePreviousPokemon = async (e) => {
    const result = await getPaginationPokemon(previusPokemon)
    setNextPokemon(result.next)
    setPreviusPokemon(result.previous)
    setPokemons(result.results)

  }


  const handleNextPokemon = async (e) => {
    const result = await getPaginationPokemon(nextPokemon)
    setNextPokemon(result.next)
    setPreviusPokemon(result.previous)
    setPokemons(result.results)

  }
  return (
    <div className='contenedor'>
      <div className='item-titulo'>
        <span>Listado de Pokemon</span>
      </div>
      <div className='item-container'>
        <div className='item-buscador'>
          <Search />
        </div>
        <ListPokemon />
        <div className='modalPokemon'>
          {selectPokemon && <Pokemon />}
        </div>
      </div>
      <div className='buttonPokemon'>
        <button disabled={previusPokemon === null} onClick={() => handlePreviousPokemon()}  > <i className="fa fa-arrow-left" aria-hidden="true"></i> Atras</button>
        <button disabled={nextPokemon === null} onClick={() => handleNextPokemon()}> Siguiente <i className="fa fa-arrow-right" aria-hidden="true"></i> </button>
      </div>

    </div>
  )
}

export default MainPage