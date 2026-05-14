import readline = require('readline-sync')

// Limpa tela
  console.clear()

const nome:string = readline.question("Qual e o seu nome  ")

const peso:number = Number(readline.question("Informe seu peso  "))
const altura:number = Number(readline.question("Informe sua altura  "))

let situacao:string = ""



const imc = (peso / (altura * altura))

if (imc < 18.5){
        situacao = "Baixo peso"

}else if (imc >= 18.5 && imc <= 24.9){
        situacao = 'Peso normal'

}else if (imc >= 25.0 && imc <= 29.9){
	situacao = 'Excesso de peso'

}else if (imc >= 30.0 && imc <= 34.9){
	situacao = "Obesidade de Classe 1"

}else if (imc >= 35.0 && imc <= 39.9){
	situacao = "Obesidade de Classe 2"

}else{
        situacao = "Obesidade de Classe 3"
}


console.log(`Olá, ${nome}! Sua altura e  ${altura}, e seu peso e de ${peso}, com isso seu imc e de  ${imc.toFixed(2)} a sua classificação! ${situacao}`)
