let frutas:string[] = ["Morango", "Banana", "Pera", "Uva", "Abacaxi"]

console.log("frutas",frutas)
console.log("Frutas", frutas[1])
console.log("frutas",frutas.length)
console.log("frutas",frutas[frutas.length - 1])
 
//orden alfabetica
//frutas.sort()

//orden decrecente
//frutas.reverse()

// acresenta frutas no final da fila
//frutas.push("limão")

// acresentar na primeira posição
//frutas.unshift("Melão")


// tracar a fruta da segunda posição pela melancia
//frutas[2]="melancia"


// remove o ultimo elemento do array 
//frutas.pop()

// remocve o primeiro elemento do array
//frutas.shift()

//carrega a lista

for(let i = 0; i < frutas.length; i++){
	console.log(`${i + 1} - ${frutas[i]}`)
}
