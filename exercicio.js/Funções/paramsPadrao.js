// Estrategia 1  para a gerar valor padrao

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + c + b
}

console.log(soma1(), soma1(2, 4, 7), soma1(0, 0, 0))

//estrategia 2 ,3 e 4 para gerar valor padrao

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + c + b
}

console.log(soma2(), soma2(2, 4, 7), soma2(0, 0, 0), soma2(5))

// valor padrao es2015
function soma3(a = 1, b = 1, c = 1) {
    return b + c + a

}

console.log(soma3(), soma3(2, 4, 7), soma3(0, 0, 0), soma3(5))



