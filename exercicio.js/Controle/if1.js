function soNoticiaBoa (nota ) {
    if (nota >= 7 ){
        console.log('Aprovado')
    } else {
        console.log("Reprovado")
    }
}
soNoticiaBoa(8.1)

soNoticiaBoa(6.1)

function seForVerdadeEufalo (valor){
    if (valor){
        console.log(`É verdade.....${valor}`)
    }
}

seForVerdadeEufalo()
seForVerdadeEufalo(true)