//Somar
//Subtrair
//Multiplicar
//Dividir
// Deverá receber dois paramentro e o seu valor


function somar(numero1:number, numero2:number){
	return numero1 + numero2
}

function subtrair(numero1:number, numero2:number){
	return numero1 - numero2
}

function multiplicar(numero1:number, numero2:number){
	return numero1 * numero2
}

function dividir(numero1:number, numero2:number){
	if (numero2 === 0){
		return "Não e passivel dividir por zero"
	}
	return numero1 / numero2
}

export { somar, subtrair, multiplicar, dividir }

