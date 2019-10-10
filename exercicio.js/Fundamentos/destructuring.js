//novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua das almas 157',
        numero: 666
    }

}

const { nome, idade} = pessoa
console.log(nome,idade)
console.log (pessoa)

const { nome: x, idade: y} = pessoa
console.log (x, y )

const {sobrenome , bemHumorada = true } = pessoa
console.log (sobrenome, bemHumorada)

const {endereço: {logradouro,numero,cep }} = pessoa
console.log (logradouro,numero,cep)
