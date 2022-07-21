import React, { useContext } from 'react'
import "../BuscarPokemon/searchPokemon.css"
import usePokemon from '../../Hooks/usePokemon';
function SearchPokemon() {

  const { setSearch, search } = usePokemon();
  

  const handleSearch = (e) => {
    setSearch(e)
  }
  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} className='icon' placeholder='Buscar' />
    </div>
  );
}

export default SearchPokemon