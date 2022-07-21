import React, { useEffect, useState } from 'react';
import Search from '../components/BuscarPokemon/searchPokemon'
import ListPokemon from '../components/ListPokemon/ListPokemon';
import Pokemon from '../components/Pokemon/Pokemon';
import usePokemon from '../Hooks/usePokemon';
import './MainPage.css'

function MainPage() {
  const { selectPokemon, setPokemons, pokemons, paginationPokemon, setPaginationPokemon, pageSelected, setPageSelected } = usePokemon()

  // let limit = 4;
  // let totalRow = pokemons.length;
  // const initPage = () => {
  //   setPaginationPokemon(pokemons.slice(0, limit));
  // }

  // const changePage = (event, newPage) => {
  //   console.log(newPage)
  //   setPageSelected(newPage);
  //   setPaginationPokemon(pokemons.slice((newPage - 1) * limit, newPage * limit));
  // }


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
      {/* <button onClick={() => addCount()}> atras</button>
      <button onClick={() => reduceCount()} >siguiente </button> */}
    </div>
  )
}

export default MainPage