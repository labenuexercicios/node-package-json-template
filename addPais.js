import { countries } from "./countries.js";

const name = process.argv [2]
const code = process.argv [3]

if(!name || !code){
    console.log("Digite o nome e/ou código do pais")
}else{
    const newCountry={
        name,
        code
    }
    countries.push(newCountry)
    //Podemos ordenar a lsita também
    countries.sort((a,b)=>{
        a.name.toLowerCase()< b.name.toLowerCase()? -1 : 1
    })
        console.table(countries[countries.length-1])  
}