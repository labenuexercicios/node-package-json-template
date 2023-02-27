import { countries } from "./countries.js";

// console.table(countries) //* Converte o dado em formato de tabela(Array organizada);

const pais = process.argv[2]

if(!pais){
    console.log('Insira um valor.')
}else{
    if(pais){
        const listaFiltrada = countries.filter((item)=>{
            return item.name.toLowerCase().includes(pais.toLowerCase())
        })
        console.table(listaFiltrada)
    }
}