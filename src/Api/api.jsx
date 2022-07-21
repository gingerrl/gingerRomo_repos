import axios from "axios";


export async function getPokemon() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    return response.data
}

export async function getPokemonName(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data
}