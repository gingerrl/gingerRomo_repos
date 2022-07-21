import React, { useContext } from 'react'
import PokemonContext from '../ContextProvider/ProviderContext';

function usePokemon() {
    return useContext(PokemonContext);
}

export default usePokemon