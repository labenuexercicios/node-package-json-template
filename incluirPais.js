import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if(!name || !code){
    console.log('Digite o nome do pais e/ou codigo do pais')
}else{

    const newCountry = {
        name,
        code
    }

    countries.push(newCountry)

    console.table(countries)
}