import { countries } from "./countries.js";

// console.log(countries)
// console.table(countries)

//info é a posição 2
const value = process.argv[2]

//para buscar algo dá para filtrar a table
if(!value){ 
    console.log('Informe um pais') }
    else{ 
        const result = countries.filter((country)=>{ 
            return country.name.toLowerCase().includes(value.toLowerCase()) })
             console.table(result) }

             //para pesquisar, quando da "INFORME UM PAÍS" precisa digitar node index.js nomeDoPais
             //se digitar o país direto não aparece