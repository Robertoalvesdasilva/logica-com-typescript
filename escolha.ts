import * as readline from "readline-sync"

const combos:string[] = [
  "X-Burger + Refrigerante",
  "X-Salada + Suco",
  "Hot Dog + Refrigerante",
  "Batata Frita"
]

const precos:number[] = [10.5, 10, 7.5, 2.5]

let comboSelecionado:string[] = []
let valores:number[] = []

let loop:boolean = true

while(loop) {

  console.log("\nCombo para o lanche:")

  combos.forEach((combo, index) => {
    console.log(`${index + 1} - ${combo}`)
  })

  const opcoes:number = readline.questionInt(
    "Escolha uma opção: "
  )

  if(opcoes >= 1 && opcoes <= combos.length) {

    comboSelecionado.push(combos[opcoes - 1]!)

    const preco:number = precos[opcoes - 1]!

    valores.push(preco)

  } else {

    console.log("Ops! Opção inválida informe número de 1 a 4")

  }

  const parar:number = readline.questionInt(
    "\nDeseja algo à mais? 1 - Sim | 2 - Não "
  )

  loop = parar !== 2
}

console.log("\nResumo do pedido")

for(let i = 0; i < comboSelecionado.length; i++) {

  console.log(
    `${comboSelecionado[i]} ............. R$ ${valores[i]!.toFixed(2)}`
  )

}

const totalAcumulado:number =
  valores.reduce((acc, valor) => acc + valor, 0)

console.log(
  `\nVocê selecionou ${valores.length} item(ns) seu total é de R$ ${totalAcumulado.toFixed(2)}`
)
