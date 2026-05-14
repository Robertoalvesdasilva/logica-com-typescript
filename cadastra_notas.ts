import readline = require('readline-sync')

// Limpa tela
  console.clear()

const nome_aluno:string = readline.question("Qual o nome do aluno  ")

const nota1:number = Number(readline.question("Informe a primeira nota  "))
const nota2:number = Number(readline.question("Informe a segunda nota  "))
const nota3:number = Number(readline.question("Informe a terceira nota  "))
const numero_faltas:number = Number(readline.question("Informe a quantidades de faltas  "))

let situacao:string = "" 

// a regra, media >= 7 aprovado,se a media for maior > = 5 e < 7 e falta > 3, estarar de recuperação, caso ao contrario, reprovado
// e a quantidade de falta < 5

const media = (nota1+nota2+nota3)/3

if (media >= 7 && numero_faltas <= 5){
	situacao = "Aprovado"

}else if (media >= 5  && media < 7 && numero_faltas < 3){
	situacao = 'Recuperação'

}else{
	situacao = "Reprovado"
}


console.log(`Olá, ${nome_aluno}! Sua madia é de  ${media} e um total de ${numero_faltas} faltas,  e sua situação é de ${situacao}`)
