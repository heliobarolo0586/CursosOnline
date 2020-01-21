
function criarProduto (nome, preco, cod){
    return {
        nome: nome,
        preco: preco,
        cod,
    }
}

//Outra maneira de fazer 

function criarProduto02 (nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('peixe',45,215))
console.log(criarProduto02('ipad',1199.99))
