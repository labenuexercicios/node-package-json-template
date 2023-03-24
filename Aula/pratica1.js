import { countries } from "./countries.js";

// Vamos criar uma aplicação do node que receberá o 'nome de um país' pelo terminal e o buscará em uma lista.

const query = process.argv[2];

console.log(query)

if (!query) {
  console.log("Faltou o argumento esperado");
} else {
  //const result = countries.find((country) => country.name.toLowerCase() === query.toLowerCase());
  const result = countries.find((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(result);
}

// Continuando o exercício anterior, vamos criar alguns scrips personalizados:
// Um script que sempre retorne o Brasil