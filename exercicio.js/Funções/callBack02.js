const notas = [7.2, 2.9, 3.3, 5.9, 8.0, 9.0]

//sem callback

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }

} 

console.log(notasBaixas)
// com callback

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter (notasMenorQue7)

console.log(notasBaixas2)