import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if(!name || !code) {
    console.log("Digite o nome e/ou código do país")
}else {
    const newCountry={name: name,
    code: code,}

    countries.unshift(newCountry)
    console.log(countries)
 

}


