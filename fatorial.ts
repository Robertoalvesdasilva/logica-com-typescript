
import readline = require('readline-sync')


let resultado:number = 1
const numero:number = Number(readline.question("Qual numero voce que  "))

if (numero < 0){
	console.log("nao fatora")
}
else{
	for(let i = 1;i <= numero; i++)
		resultado = resultado * i
	console.log(`o fatorial de ${numero} e ${resultado}`)
}



