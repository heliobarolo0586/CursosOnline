//coleção dinâmica de pares chave/valor

const produto = new Object

 produto.nome = 'Cadeira'
 produto['Marca do produto'] = 'Genérica'
 produto.preco = 220

 delete produto.preco

 const carro = {
     modelo: 'A4',
     valor:89000,
     proprietario: {
         nome:"Raul",
         idade:26,
         endereço: {
             rua: 'Ysmarl alonso alonso',
             numero:1190
         }
     },
     condutores: [{
         nome:'Ana',
         idade:45
     },{
         nome:'Junior',
         idade:19

     }],
     calcularValorDoSeguro: function(){
         //bla bla bla bla bla.......
     }
 }

 //modo de acessar a um dado do objeto

 carro.proprietario.endereço.numero = 1000

// console.log(carro)

 delete carro.condutores
 delete carro.proprietario.endereço
 delete carro.calcularValorDoSeguro

 console.log(carro)
 console.log(carro.condutores)