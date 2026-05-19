import readline = require('readline-sync')
const {somar, subtrair, multiplicar, dividir} = require("./calculadora.ts")

const numero1:number = Number(readline.question("Digite o primeiro numero "))
const numero2:number = Number(readline.question("Digite o segundo numero "))

console.log("somar:",somar(numero1, numero2))
console.log("Multiplicar:",multiplicar(numero1, numero2))




import {somar, subtrair} from "./calculadora"
const a = 10
const b = 6

console.log(somar: ", somar(a, b))
