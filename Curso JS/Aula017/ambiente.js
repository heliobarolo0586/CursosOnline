let amigo = {nome:"jose"
,sexo:'Masculino',
peso:60.00,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar (10)
console.log(`${amigo.nome} pesa ${amigo.peso}`)