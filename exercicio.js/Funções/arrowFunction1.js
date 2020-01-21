// Função normal

function dobro(a) {
    return a * 2
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return esta implicito

console.log(dobro(Math.PI).toFixed(2))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => "ola" // possui parametro.

console.log (ola())
