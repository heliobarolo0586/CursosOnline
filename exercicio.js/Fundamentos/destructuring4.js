function rand ([min =0, max = 1000]){
    if (min > max )  [min , max] = [max, min ]
    valor = Math.random ( ) * (max - min ) + min
    return Math.floor (valor)
}

console.log (rand([40,60]))
console.log(rand([992]))
console.log (rand([, 330]))
console.log(rand([]))
// console.log(rand()) Vai gerar um erro pois vai tentar destruturar algo null ou undefined