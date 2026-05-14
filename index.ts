<<<<<<< HEAD
const tela = require('readline-sync')
const nome:string = tela.question('Qual e o seu nome?')
const ano_nasc:number = tela.question('Qual o ano seu nascimento? ')
const idade = 2026 - ano_nasc
console.log('Olá,' +nome+ 'o ano que voce nasceu foi' +ano_nasc+ 'a sua idade é' +idade+ 'anos.')

=======
import tela = require('readline-sync')
// pergunta o nome da pessoa
const nome:string = tela.question('Qual é o seu nome? ')
	const anoNasc:number = Number(tela.question('Qual o ano do seu nascimento?'))
const idade:number = 2026 - anoNasc
console.log('Olá, '+ nome +' a sua idade é '+ idade + ' anos.')
>>>>>>> 81c02ce (calculo imc e cadastra notas)
