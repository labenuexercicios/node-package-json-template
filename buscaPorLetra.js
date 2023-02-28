import { countries } from "./countries.js"

const value = process.argv[2]

if(!value){ 
    console.log('Informe uma letra') }
    else{ 
        const result = countries.filter((country)=>{ 
            return country.name.toLowerCase()[0] === value.toLowerCase()
        
        })
             console.table(result) }
             //digita no terminal node buscarPorLetra.js letraQueQuer, por ex node buscarPorLetra.js b
//la no package json criou um script (atalho) com a buscar por letra, ai do lado inferior esquerdo em NPM SCRIPTS temos esses scripts listados

//no paxkage json adicionamos no script   "buscaPorLetra": "clear &&  node buscaPorLetra.js b", o clear && é para limpar o terminal antes de executar