
const nome = process.argv[2]
const idade =+process.argv[3]
const novaIdade =+ process.argv[3]+7

if(!nome || !idade ===null){
    console.log('Informe seu nome e idade')
}else{
    console.log(`Olá, ${nome}! você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)
}