const read = require("readline-sync")
const chalk = require("chalk")
let nome =read.question("Digite o seu nome: ")
let sobrenome = read.question("Digite o seu sobrenome: ")


console.log( chalk.blue.bgWhite(nome));
console.log(chalk.red.bgWhite(sobrenome));
console.log(nome, sobrenome)
console.log(nome + " " + sobrenome);
console.log(`Olá, ${nome} ${sobrenome}`);