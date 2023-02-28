import { countries } from "./countries.js"

//para incluir coisas dentro do array dá um push
const name = process.argv[2]
const code = process.argv[3]

//se não existir nem o nome nem o code precisa incluir, então pedimos para digitar
if(!name || !code){
    console.log("Digite o nome do país e code")
} else {
const newCountry = {
    name,
    code,
}

//push adiciona na última posição do array
countries.push(newCountry)
console.table(countries)
}
