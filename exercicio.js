
const nome = process.argv[2]
const idade = process.argv[3]

if(!nome || !idade ){
    console.log("falta o argumento de busca")
}else{
    const newperson =  `olá, ${nome}! Você tem ${idade} anos`
    console.log(newperson)
    console.log(`Em sete anos você terá ${Number(idade) + 7}`)

}

