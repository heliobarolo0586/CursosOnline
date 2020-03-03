function acontece(array, quantidadeMinima) {
    let pontuais = 0;
    for (let i = 0; i < array.length; i++) {  
        if (array[i] <= 0) {
            pontuais++
        } 
    }
    
    return pontuais >= quantidadeMinima
}

var alunosDaSegunda = [10, -5, 3, 0];
let aux = acontece([10, -5, 3, 0], 4)
console.log(aux)
var alunosDaTerça = [10, 15, 22, -22, -30]

var teste01 = [alunosDaSegunda, alunosDaTerça]

console.log(teste01[0][2])
if (teste01[0][2] > 0) {
    console.log("teste")
}


function aberturas(array, quantidadeMinima) {
    let resultados = [];
    for (let i = 0; i < array.length; i++) {
        let pontuais = 0;
        let vetorAuxiliar = array[i];
        for (let x = 0; x <= array.length; x++) {
            let aux = array[i][x];
            if (aux <= 0) {
                pontuais++
            }
            console.log(x)
            //console.log(pontuais)
            //console.log(vetorAuxiliar.length)
            if (vetorAuxiliar.length < quantidadeMinima) {
                resultados[i] = false
            } else {
                resultados[i] = pontuais >= quantidadeMinima
            }
        }


    }
    return resultados
}

let minhaMae = aberturas([[0, 0, -3, 0], [1, 2, 4, 5], [0, 0, -1]], 4)
console.log(minhaMae)