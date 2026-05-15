
import readline = require('readline-sync')

// Limpa tela
  console.clear()


const numero:number = Number(readline.question("Qual numero voce que  "))


for(let i=numero;i <= 0; i--){
	 console.log(`${numero} + ${i} = ${numero + i}`)
}

