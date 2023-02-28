import { countries } from "./countries.js"



const name = process.argv[2]
const idade = process.argv[3]
const novaIdade= Number( process.argv[3])+7

if(!name || !idade){
    
    console.log("Digite o seu nome e a sua idade")
} else{
   console.log(`Olá ${name}! Você tem ${idade} anos.`)
console.log(`Em sete anos você terá ${novaIdade} anos.`) 
}

