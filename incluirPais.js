import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if (!name || !code) {
    console.log('digita aí pô');
} else {
    const newCountry = [
        name ,
        code 
    ]
    countries.push(newCountry)
    console.table(countries)
}