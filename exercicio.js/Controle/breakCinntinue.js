const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let pos in numeros) {
    if (pos == 5) {
        break;
    }
    console.log(`${pos} = ${numeros[pos]}`)
}

for (let pos in numeros) {
    if (pos == 5) {
        continue
    }
    console.log(`${pos} = ${numeros[pos]}`)
}

// break com rotulo

externo: for (let pos in numeros) {
    for (let b in numeros) {
        if (pos == 2 && b == 3) break externo
        console.log(`Par = ${pos}, ${b}`)
    }
}