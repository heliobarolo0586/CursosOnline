const soma = function (x,y){
    return x + y
}

const imprimirResultado = function  (a,b , operacao = soma ){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(5,5,soma)
imprimirResultado(25,30,function(x,y){
    return x-y
})

imprimirResultado (8,7,(x,y)=> x *y )

const pessoa = { 
    falar: function (){
        console.log('OPORRA')
    }
}

pessoa.falar()

