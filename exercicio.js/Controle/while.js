function getInteiroAleatorio (min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorio (-1,10)
    console.log (`Opção é igual a: ${opcao}`)

}

console.log ('Até a proxima!!')