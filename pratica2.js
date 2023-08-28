import { countries } from "./countries.js"

const findCountries = (inputCountry) => {

    const result = countries.find((country) => country.name.toLowerCase() === inputCountry.toLowerCase())

    return result
}

console.table(findCountries(process.argv[2]))