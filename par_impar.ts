
import readline = require('readline-sync')

// Limpa tela
  console.clear()

const numero:number = Number(readline.question("Digite um numero  "))


let situacao:string = ""




if (numero % 2 === 0){
        situacao = "pa"

}else{
        situacao = "imp
}


console.log(`Esse numero e, ${situacao}`)
~
