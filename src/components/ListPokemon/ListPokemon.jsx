import React from 'react';
import usePokemon from '../../Hooks/usePokemon';
import { getPokemonName } from "../../Api/api"
import '../ListPokemon/ListPokemon.css'
import * as helperGlobal from '../../helper/global';
import imagen from '../../assets/icono.png'

function ListPokemon() {
    const { searchPokemon, setSelectPokemon } = usePokemon();
    const handleClick = async (e) => {
        const result = await getPokemonName(e)
        setSelectPokemon(result)

    }
    return (
        <div className='listContainer'>
            <div className='item1'>
                {searchPokemon.map((list, index) => (
                    <div className='cuadro' style={{ background: helperGlobal.colorStatus(index), opacity: 0.8, color: "black" }} key={index} onClick={(e) => handleClick(list.name)}>
                        <img alt="pokemon" className='imagenFondo' src={imagen} />
                        <div> <span>#</span>{helperGlobal.getUrl(list.url)}</div>
                        <div>{list.name}</div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default ListPokemon;