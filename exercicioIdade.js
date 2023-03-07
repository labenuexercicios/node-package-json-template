const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(process.argv[3])+7

if (!nome || !idade) {
    console.log('Digite seu nome ou idade');
    
} else {
    console.log(`Oi ${nome} vc tem ${idade} anos, daqui a 7 anos, terá ${novaIdade} anos!` );
}