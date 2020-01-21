// usando a notação literal 

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log (obj2)

//Funções construtoras 

function Produto ( nome, preco, cod, desc){
    this.nome = nome,
    this.preco = preco,
    this.cod = cod,
    this.getPrecoComDesconto = ()=>{
        return preco * (1-desc)
    }
}

const p1 = new Produto ('Peixe', 550,12500, 0.1 )
const p2 = new Produto ('Notebook', 2899,13000, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
p2.preco = 2000
console.log (p2.preco)

// Função Factory
function criarFuncionario (nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario  ('João', 1960, 5)
const f2 = criarFuncionario  ('Maria',11000, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Object create

const filha = Object.create (null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Object 
const fromJSON = JSON.parse ('{"info":"Sou um JSON"}')
console.log(fromJSON.info)
