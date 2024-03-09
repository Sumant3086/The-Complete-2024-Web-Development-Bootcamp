 // For the "sillyname" package
import generateName from "sillyname";
const sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// For the "superheroes" package
import superheroes from "superheroes";
const name = superheroes.random();
console.log(`I am ${name}!`);