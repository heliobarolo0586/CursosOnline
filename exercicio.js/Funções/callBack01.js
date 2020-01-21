const fabricantes = ['Audi','Mercedes', 'Ford']

function imprimirResultados (nome,indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimirResultados)
fabricantes.forEach(fabricante => console.log(fabricante))