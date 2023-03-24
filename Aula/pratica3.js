// Um script que adiciona um país à lista de países

import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

if (!name || !code) {
  console.log("Faltou o name e/ou o code esperado");
} else {
  const newCountry = {
    name,
    code,
  };
  countries.push(newCountry);
  countries.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );
  console.log(countries);
}
