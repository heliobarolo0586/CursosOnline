const prod1 = {}

prod1.nome =  'Celular ultra mega'
prod1.preco = 4890.99
prod1["Desconto Legal"] = 200 //Evitar atributos com espaço 

console.log(prod1) 

const prod2 = {
    nome:"camisa polo",
    preco: 79.90,
    desconto(valor = 0){
        this.preco -= valor
    }
}
prod2.desconto(10)

console.log (`O valor da camisa com desconto é ${prod2.preco}`)