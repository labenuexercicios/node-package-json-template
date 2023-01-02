
const nome = process.argv[2]
const idade = process.argv[3]

if(!nome||!idade){
    console.log("Digite os argumentos corretamente")
} else {
    let newAge = Number(idade)+7
    console.log(`Olá,${nome}! Você tem ${idade} anos.
    Em sete anos você terá ` + newAge)
}
