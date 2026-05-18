import readline = require("readline-sync")

console.clear()

let loop:boolean = true
let preco:number = 0
let comboSelecionado:string =[] 
let combos:string[] = ["Pet Coca + Bomba", "Pet Guarana + Bomba", "Café + Bolo", "Café com Leite"]
let valores:number[] = []

while(loop){

console.log('Combo para lanche: ')
  
combos.forEach((combo.index) => console.log(`${index + 1} - ${combo}`))
   
const opcoes:string = readline.question('Escolha uma opção: ')


	switch(opcoes) {
  		case 1:
			comboSelecionado.push(combos[opcoes - 1])
	  		preco = 10.5
	  		valores.push(preco)
	  		break

	  	case 2:
			comboSelrcionado.push(combo[opcoes - 1])
	  		preco = 10
	  		valores.push(preco)
	 		break

	  	case 3:
			comboSeleciondo.push(combo[opcoes - 1])
	  		preco = 7.5
	  		valores.push(preco)
	  		break

	  	case 4:
			comboSelecionado.push(combo[opcoes - 1])
	  		preco = 2.5
	  		valores.push(preco)
	  		break

	  	default:
			console.log('ops! Opação invalida informe numero de 1 a 4')
	  		break
}
	const parar = readline.questionInt('Deseja algo a mais? 1 - sim  |  2 - não ')
	loop = parar !== 2 ? true : false

}


console.lo("Resumo do pedido")
for(let i = 0; i < comboSelecionado.length; i++){
	console.log(`  ${comboSelecionado[i]}..... R$ ${valores[i].toFixed(2)}`)
}
const totalAcumulado = valores.reduce((acc, valor) => acc +valor)

console.log(`Você selecionou ${valores.length} item(ns) seu total é de R$ ${totalAcunulado.toFixed(2)}`)
