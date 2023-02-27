import { countries } from "./countries.js";

const nomeDePais = process.argv[2]

const siglaPais = process.argv[3]

if(!nomeDePais && !siglaPais){
    console.log('Insira valores.')
}else{
    const novoPais = {
        name: nomeDePais,
        code: siglaPais
    }
    countries.push(novoPais)
    console.table(countries)
}