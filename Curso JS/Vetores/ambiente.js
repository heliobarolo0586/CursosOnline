let num = [5,3,4];

num.push(1)
num.sort ()

console.log(num)
console.log (`Nosso vetor é o ${num}`)
console.log(`O vetor tem  ${num.length} posições `)

for (let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
pos = num.indexOf(8);

if (pos == -1){
    console.log('Valor nao encontrado')
}else {
    console.log (`A posição do numero procurado é ${pos}`)
}



