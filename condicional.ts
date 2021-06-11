const readline = require("readline-sync");

const edad: number = parseInt(readline.question("cuantos anos tiene?"));

if (edad > 20) {
  console.log("es mayor de 20");
} else {
  console.log("no es mayor de 20");
}
