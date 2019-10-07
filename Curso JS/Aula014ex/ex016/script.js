function Contar() {
    //Entrada de dados
    var inicio = document.getElementById('txtI')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')


    //Parte Lógica

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ''
        alert('Faltam dados')  
    } else {
        res.innerHTML = 'Contando....'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0){
            alert('passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { // Contagem Crescente
            for (let x = i; x <= f; x += p) {
                res.innerHTML += ` ${x} \u{1F449}`
            }
            res.innerHTML += `🏁`
        } else { // Contagem regressiva
            for (let x = i; x >= f; x -= p) {
                res.innerHTML += ` ${x} \u{1F449}`
            }
            res.innerHTML += `🏁`
        }
    }



   

}
