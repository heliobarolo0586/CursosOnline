let contador = 1
while (contador <= 10) {
    console.log(contador)
    contador++

}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const nota = [6, 7, 5, 4, 8, 7, 9, 1,10, 3, 2, 5, 4, 7, 6, 4, 7]

for (let i = 0; i < nota.length; i++) {
    switch (nota[i]) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:
        case 6:
            console.log('Aprovado')
            break
        case 5:
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}
