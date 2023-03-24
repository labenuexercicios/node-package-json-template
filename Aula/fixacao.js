// Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (nome)! Você tem (idade) anos.
// Em sete anos você terá (nova idade)."

const name = process.argv[2];
const age = process.argv[3];
const newAge = +age + 7;

console.log(`"Olá, ${name}! Você tem ${age} anos. \nEm sete anos você terá ${newAge}."`);