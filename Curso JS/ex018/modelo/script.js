
let num = document.getElementById('txtnum');
let tab = document.getElementById('lista')
let res = document.querySelector('div#res')
let vetor = [];

function isNumero(numero) {
    if (Number(numero) < 1 || Number(numero) > 100) {
        return false;
    }
    return true;

}

function janalista(numero, v) {
    if (v.indexOf(Number(numero)) != -1) {
        return true;
    } else {
        return false;
    }


}
function adicionar() {
    res.innerHTML = ""
    if ((isNumero(num.value)) && !janalista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        tab.appendChild(item)
    } else if (num.value.length == 0) {
        alert('Por favor, digite um numeros')
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ""
    num.focus ()
}

function finalizar() {
    if (vetor.length == 0){
        alert('Nenhum numero foi adicionado ainda!')
    } else {

        let maior = vetor[0]
        let menor = vetor [0]
        let total = vetor.length
        vetor.sort
        let soma = 0;

        for (let pos in vetor){
            if (maior <= vetor[pos]){
                maior = vetor[pos]
            }
            if (vetor[pos] <= menor){
                menor = vetor[pos]
            }
            soma += vetor[pos]

        }

        res.innerHTML = ""
        res.innerHTML += `<p></p> Temos ${total} numeros cadastrados </br>`
        res.innerHTML += `O maior valor encontrado foi ${maior} </br>`
        res.innerHTML += `O menor valor foi ${menor} </br>`

        res.innerHTML += `A soma todos valores é: ${soma} </br>`
        res.innerHTML += `A média é: ${soma/total}`
        
    }

}