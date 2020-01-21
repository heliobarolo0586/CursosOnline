//Peesoa -> 123 ->{...}
const Pessoa = {nome: 'João'}
Pessoa.nome = 'Pedro'
console.log(Pessoa)


//Pessoa -> 456 -> {...}
//Pessoa = {nome: 'Ana'}

Object.freeze(Pessoa)

Pessoa.nome = 'Maria'

console.log(Pessoa.nome)

// maneira de fazer um objeto que não pode ser alterado

const pessoaConstante = Object.freeze({nome: 'Carlinhos'})
console.log(pessoaConstante)