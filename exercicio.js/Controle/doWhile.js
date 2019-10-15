function gerarNumeroAlaeatorio (min,max){
    const valor = Math.random ()* (max - min) + min
    return Math.floor (valor)
}


do {
   teste = gerarNumeroAlaeatorio (-1,10)
   console.log(`Valor gerado foi: ${teste}`)

} while (teste != -1)

console.log('Isso é tudo pessoal !!')