function tabuada (){
    let num = document.getElementById ('txtn')
    let tab = document.getElementById ('seltab')
    if (num.value.length == 0) {
        alert('Por Favor, digite um numero')
    } else {
        let n = Number (num.value);
        tab.innerHTML = ""
        for (let x = 0; x < 11; x++){
            let item = document.createElement('option')
            item.text = `${n} X ${x} = ${n*x}`
            item.value = `tab${x}`
            tab.appendChild (item)
        }
    }
    

}