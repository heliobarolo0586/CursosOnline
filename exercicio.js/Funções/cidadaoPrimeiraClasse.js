// Função em JS First-Class Object (Citizens)
//Higher-order function

//criar de forma literal 

function fun1() {

}

//armazenar em uma variavel
const fun2 = function () {

}

//Armazenar em um array

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](5, 200))

//Armazenar em objetos

const obj = {}

obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar fução com param

function run(fun) {
    fun()
}

run(function () { return console.log('Executando....') })

//Uma função pode retornar/ conter um função

function soma(a = 0, b = 0) {
    return function (c = 0) {
        console.log(a + b + c)
    }
}

soma(10,15)(4)
const CincoMais = soma (14,5)
CincoMais (4)