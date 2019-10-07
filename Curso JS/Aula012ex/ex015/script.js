function verificar() {
    // Entrada de dados
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
  

    //Lógica da coisa
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute ("id","fotos")
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src',"bebehomem.jpg")
            } else if (idade < 21){
                //Jovem
                img.setAttribute("src","jovemhomem.jpg")
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','homem30.jpg')
            }else {
                //Idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute ('src','bebemulher.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovemmulher.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','mulher40.jpg')
            }else {
                //Idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos sexo ${genero} com idade de: ${idade} anos.`
        res.appendChild(img)
    }

}