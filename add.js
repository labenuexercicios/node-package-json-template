import {countries} from "./countries.js"

const nomeDePais = process.argv[2]
const sigla = process.argv[3]
if(!nomeDePais && !sigla) {
    console.log("insira um valor");
}else{
const novoPais = {
    name: nomeDePais,
    code: sigla
}
countries.push(novoPais)
console.table(countries)
}

