const tela = require('readline-sync')
const nome:string = tela.question('Qual e o seu nome?')
const ano_nasc:number = tela.question('Qual o ano seu nascimento? ')
const idade = 2026 - ano_nasc
console.log('Olá,' +nome+ 'o ano que voce nasceu foi' +ano_nasc+ 'a sua idade é' +idade+ 'anos.')

