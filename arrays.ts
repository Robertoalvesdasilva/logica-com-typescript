let frutas:string[] = ["Morango", "Banana", "Pera", "Uva", "Abacaxi"]

console.log("frutas",frutas)
console.log("Frutas", frutas[1])
console.log("frutas",frutas.length)
console.log("frutas",frutas[frutas.length - 1])
 
//orden alfabetica
frutas.sort()
//carrega a lista

for(let i = 0; i < frutas.length; i++){
	console.log(`${i + 1} - ${frutas[i]}`)
}
