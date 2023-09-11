console.log(Math.ceil(6.45))

const obj1 = {}

obj1.nome = "Gustavo"

console.log(obj1.nome)

function Obj(nome){

    this.nome = nome

}

const obj2 = new Obj("Bola")

const obj3 = new Obj("Mesa")

console.log(obj2.nome, obj3.nome)