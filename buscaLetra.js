import { countries } from "./countries.js";

const value = process.argv[2]

if (!value){
    console.log("Digite o argumento")
}else{
    const result = countries.filter((country)=>{
       return country.name.toLowerCase()[0] === value.toLowerCase()
})
    console.log(result)
}

