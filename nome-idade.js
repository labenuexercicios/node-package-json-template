const name = process.argv[2]
const age = Number(process.argv[3])

const soma = age + 7

if(!name || !age){
    console.log('Informe seu nome e/ou idade')
}else{
    console.log(`"Olá, ${name}! Você tem ${age} anos.\n Em sete anos você terá ${soma}."`)
}