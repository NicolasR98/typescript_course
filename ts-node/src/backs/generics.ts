import { genericFunction, printObject, genericFunctionArrow } from '../generics/generics';
import { Hero, Villian } from '../interfaces';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 100,
}

const realName = genericFunctionArrow<Hero>(deadpool).realName;
const dangerLevel = genericFunctionArrow<Villian>(deadpool).dangerLevel;

console.log({realName, name: dangerLevel});

// printObject(123)
// printObject('Hello world')
// printObject({ a: 1, b:2, c:3})
// printObject(new Date())
// printObject([1,2,3,4,5,6,7,8,9])

// const str: string = 'Hello world'
// const date: Date = new Date();

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction(str).toUpperCase());
// console.log(genericFunction(date).getTime());


// import { Hero as SuperHero, Hero } from './classes/Hero';
// const ironman = new SuperHero('Ironman', 3, 45);
// console.log(ironman.power);