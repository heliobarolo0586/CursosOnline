var idade = 22
console.log (`Você tem ${idade} anos`)
if (idade < 16 || idade > 65) {
    console.log('Não Vota')
} else if (idade < 18) {
    console.log('Voto opcional')
}else {
    console.log('Voto obrigatório')
}