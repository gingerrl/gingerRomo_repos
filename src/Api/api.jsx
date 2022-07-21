import axios from "axios";


export async function getPokemon() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=4&offset=0/');
    return response.data
}

export async function getPokemonName(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data
}

export async function getPaginationPokemon(data) {
    const response = await axios.get(data);
    return response.data
}
