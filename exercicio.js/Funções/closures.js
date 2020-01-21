//clouseres é o escopo  criado quando a função e declarada  
//esse escopoo permite a função acessar e manipular variaveis externas a função.

//Contexto lexico em ação

const x = 'Global'

function fora (){
    const x = 'Local'
    function dentro (){
        return x
    }
    return  dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())