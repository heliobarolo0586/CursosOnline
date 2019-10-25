function soma (){
    let soma = 0
    for (let i in arguments){
        soma += arguments [i]
    }
    return soma 
}

console.log (soma())
console.log(soma(10,15,188))
console.log(soma(14,15))