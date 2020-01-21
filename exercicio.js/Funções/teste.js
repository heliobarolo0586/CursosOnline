/*function escada (numero ){
    let vetorDeEscada = [];
    for (let i =0; i < numero;i++){
      for (let x =0 ; x < i+1;x++){
        vetorDeEscada[i] += '#' ;
    
      }
    }
    return vetorDeEscada 
  }

let aux = escada(3);
console.log(aux); */

function escada(numero){
    let vetorDeEscada = [];
    for(let i = 1; i <= numero; i++){
      let espaco = numero - i;
      vetorDeEscada.push(" ".repeat(espaco) + "#".repeat(i));
    }
    return vetorDeEscada;
  }

  let aux = escada(3);
  console.log(aux)