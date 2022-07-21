import React from 'react';
import usePokemon from '../../Hooks/usePokemon';
import "../Pokemon/Pokemon.css";
import * as helperGlobal from '../../helper/global';
import imagen from '../../assets/icono.png'

function Pokemon() {
    const { selectPokemon } = usePokemon();

    const sprites = (Object.values(selectPokemon.sprites).filter(x => typeof x == "string"))
    const moves = (selectPokemon.moves).filter((x, i) => i <= 10)
    return (
        <div className='cuadroPokemon' style={{ background: helperGlobal.colorStatus(selectPokemon.id), opacity: 0.8, color: "black" }} >
            <img alt="pokemon" className='imagenPokemon' src={imagen} />
            <div className='centerText'> <span className='textNegrita'>#</span>{selectPokemon.id}</div>
            <div className='centerText'> <span className='textNegrita'>{selectPokemon.name}</span></div>
            <div > <span className='textNegrita'>Types</span>
                {selectPokemon?.types.map((types, index) => (
                    <div key={index}> {types.type.name} </div>
                ))}
            </div>
            <div className='textNegrita'>Peso </div>
            <div>{selectPokemon.weight} kg</div>
            <div className='textNegrita' > Sprites </div>
            <div className='spritesText'>
                {sprites.map((url, index) => (
                    <img key={index} alt="pokemon" className='spritesImage' src={url} />
                ))}
            </div>
            <div className='textNegrita' >Movimientos</div>
            <div className='movesText'>
                {moves.map((moves, index) => (
                    <div key={index}>{moves.move.name} {","} </div>
                ))}
            </div>
        </div>
    )
}

export default Pokemon;