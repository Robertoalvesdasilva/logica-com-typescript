
import readline = require('readline-sync')

// Limpa tela
  console.clear()


const numero:number = Number(readline.question("Qual numero voce que  "))
let operacao = readline.question("qual operação  ")

if(operacao == "+"){
	for(let i=1;i <= 10; i++){
		console.log(`${numero} + ${i} = ${numero + i}`)
	}
} 

else if(operacao == "-"){
	for(let i=1; i <= 10; i++){
		console.log(`${numero} - ${i} = ${numero - i}`)
	}
}

else if(operacao == "/"){
	for(let i=1;i <= 10; i++){
		console.log(`${numero} / ${i} = ${(numero / i).toFixed(2)}`)
	}
}

else if(operacao == "*"){
	for(let i=1;i <= 10; i++){
		console.log(`${numero} * ${i} = ${numero * i}`)
		
	}
}






