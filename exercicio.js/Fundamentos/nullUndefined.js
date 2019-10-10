let valor /* nao inicializar
 = undefined que significa que a varialvel nao foi inicializada */
console.log(valor)

valor = null  // ausencia de valor 
console.log(valor)
// console.log(valor.toString ()) //Erro !

const produto = {}

console.log (produto.preco)
console.log (produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco maneira correta
console.log (produto)

produto.preco = null //sem preco 
console.log (!!produto.preco)
console.log(produto)