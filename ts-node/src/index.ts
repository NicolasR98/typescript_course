import { getPokemon } from './generics/get-pokemons';

getPokemon(2)
    .then(resp => console.log(resp.sprites.front_default))
    .catch(err => console.error(err))
    .finally(() => console.log('End of communication'))