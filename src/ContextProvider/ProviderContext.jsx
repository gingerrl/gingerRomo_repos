import React, { useEffect, useState } from "react"
import { getPokemon,getPokemonName } from "../Api/api"
const PokemonContext = React.createContext()

function ProviderContext({ children }) {
    const [oculto, setOculto] = useState(true)
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [searchPokemon, setSearchPokemons] = useState([]);
    const [selectPokemon, setSelectPokemon]= useState(null);
    const [paginationPokemon, setPaginationPokemon] = useState([]);
    const [pageSelected, setPageSelected] = useState(1);

    useEffect(() => {
        setSearchPokemons(pokemons.filter(x => x.name.toUpperCase().includes(search.toUpperCase())))
    }, [search])

    useEffect(() => {
        setSearchPokemons([...pokemons])
    }, [pokemons])

    useEffect(() => {
        async function fetchPokemons() {
            const result = await getPokemon()
            setPokemons(result.results)
        }
        fetchPokemons()

    }, [])


    return (
        <PokemonContext.Provider value={{
            pokemons,
            setPokemons,
            setSearch,
            setSearchPokemons,
            searchPokemon,
            search,
            setSelectPokemon,
            selectPokemon,
            oculto,
            setOculto,
            paginationPokemon, 
            setPaginationPokemon,
            pageSelected, 
            setPageSelected
        }}

        >{children}</PokemonContext.Provider>
    )
}
export { ProviderContext }

export default PokemonContext