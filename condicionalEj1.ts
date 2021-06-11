const readline = require("readline-sync");

const nombre: string = readline.question("cual es tu nombre?");
const apellido: string = readline.question("cual es tu apellido?");
console.log("Tu nombre es: " + nombre + " " + apellido);

if (apellido.length > 10) {
  // length es para contar la cantidad de letras
  console.log("tiene mas de 10");
} else if (apellido.length < 5) {
  console.log("que cortito");
} else {
  console.log("esta entre 5 y 10");
}
