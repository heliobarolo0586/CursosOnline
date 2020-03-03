function alturaArvoreUtopica(ciclos) {
    let tamanho = 1;
    if (ciclos == 0) {
        return tamanho
    } else {
        let aux = 1;
        while (ciclos != aux){
            if (aux % 2 == 0){
                tamanho++
            } else {
                tamanho = tamanho * 2
            }
        }
    }
    return tamanho
}
let aux = alturaArvoreUtopica (2);
console.log(aux)
