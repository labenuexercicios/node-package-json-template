import { countries } from "./countries.js"

//vamos criar uma aplicação do
//node que receberá o nome de
//um país pelo terminal e o buscará em uma lista.



const value = process.argv[2]

if(!value){
    console.log("Digite o argumento")
}else{
    const result = countries.filter((pais)=>{
        return pais.name.toLocaleLowerCase().includes(value.toLowerCase())
    })
    console.table(result)
}

