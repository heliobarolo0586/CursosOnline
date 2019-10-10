//par/nome valor
const saudacao = 'Opa' //contexto léxico 1
    function exec () {
        const saudacao = "Falaa galerinha do youtubiiiiii" // contexo léxico 2
        return saudacao
    }

//objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro', 
    idade: 20,
    peso: 80,
    endereço:{
        logradourou: 'Rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)