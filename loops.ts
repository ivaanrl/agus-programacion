import readline from "readline-sync";

//for(let i = 1; i < 6; i++ ){
//    const edad: number = parseInt(readline.question("cuantos anos tiene?"));
//
//    if (edad > 20) {
//        console.log("es mayor de 20");
//      } else {
//        console.log("no es mayor de 20");
//      }
//}

//for(let i=3; i < 14; i++){
//    console.log(i)
//}
//for (let i=2; i<13; i = i+2){
//    console.log(i)
//}
for (let i = 1; i < 29; i++) {
  if (i % 2 == 1) {
    console.log(i + " " + "es impar");
  } else {
    console.log(i + " " + "es par");
  }
}

let i = 0;

while (i < 5) {
  console.log(i);

  i++;
}
