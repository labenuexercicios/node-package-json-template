// Um script que retorna todos os países que comecem com a letra B

import { countries } from "./countries.js";

const query = process.argv[2];

console.log(query);

if (!query) {
  console.log("Faltou o argumento esperado");
} else {
  const result = countries.filter((country) =>
    country.name.toLowerCase()[0].includes(query.toLowerCase())
  );
  console.log(result)
}
