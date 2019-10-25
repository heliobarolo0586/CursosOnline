const notas = [6.7,6.4,9.9,8.8,6.5,6,7,7.2]

for (let pos in notas){
    console.log(pos, notas[pos])
}

const pessoa = {
    nome: 'Ana ',
    sobrenome: 'Carrara',
    idade: 29,
    peso: 65

}

for (let atributo in pessoa){
    console.log (`${atributo} = ${pessoa[atributo]}`)
}