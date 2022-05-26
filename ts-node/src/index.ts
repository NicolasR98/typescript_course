import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// This will throw an error because our decorator, seals the class
// (Pokemon.prototype as any).newName = 'Pikachu'

console.log(charmander);
// charmander.publicApi = 'nicolas'
charmander.savePokemonToDB(77)

