import React, { useContext } from 'react'
import "../BuscarPokemon/searchPokemon.css"
import usePokemon from '../../Hooks/usePokemon';
function SearchPokemon() {

  const { setSearch, search } = usePokemon();
  const handleSearch = (e) => {
    setSearch(e)
  }
  return (
    <div className='searchContainar'>
      <input onChange={(e) => handleSearch(e.target.value)} className='icon searchPokemon' placeholder='Buscar' />
    </div>
  );
}

export default SearchPokemon