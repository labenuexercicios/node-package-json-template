import { countries } from "./countries.js"

const query = process.argv[2]

if (!query) {
    console.log('FALTOU O ARGUMENTO DE BUSCA')
} else {
    const result = countries.filter(countries => countries.name.includes(query))
    console.log(result)
}
const teste = process.argv[2]
console.log(teste)