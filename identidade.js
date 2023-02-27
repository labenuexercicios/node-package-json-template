const nome = process.argv[2]
const idade = process.argv[3]

if(!nome && !idade){
    console.log('Insira nome e idade')
}else{
    console.log(`Olá, ${nome}! Você tem ${idade} anos. \nEm sete anos você terá ${Number(idade)+7}.`)
}