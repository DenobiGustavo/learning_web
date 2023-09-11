notas = [2.2, 4.4, 5.6, 7.8, 9, 10, 1.1]

for(let i in notas){

    console.log(i, notas[i])
}

const pessoa = {

    nome: "Scry",
    peso: 120,
    altura: 2.00,
    idade: 19

}

for(let atributo in pessoa){

    console.log(`${atributo} = ${pessoa[atributo]}`)
}