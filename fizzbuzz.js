/*
Fizzbuzz Challenge: 

Escribir un programa que haga un loop desde 0
hasta 100. 

1. Si el numero es multiplo de 3, se muestra "Fizz" en la pantalla
2. Si el numero es multiplo de 5, se muestra "Buzz" en la pantalla
3. Si el numero es multiplo de 15, se muestra "Fizzbuzz" en la pantalla
4. Si no es multiplo de ninguno, se muestra el numero.
*/

for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let i = 1;

while (i < 29) {
  if (i % 2 == 1) {
    console.log(i + " " + "es impar");
  } else {
    console.log(i + " " + "es par");
  }
  i++;
}
