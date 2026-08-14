

import read from "readline-sync"
let largura  = Number(read.question("Digite a largura"))
let altura = Number(read.question("Digite a altura"))
let perimetro = altura*largura
console.log(typeof altura)
console.log(typeof largura)

console.log(altura+largura);
console.log(perimetro)
