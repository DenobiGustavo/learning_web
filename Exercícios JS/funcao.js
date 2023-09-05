function imprimirSoma(a, b){

    console.log(a + b)

}

imprimirSoma(3, 4)

function soma(a, b = 0){

    return a + b

}

console.log(soma(5, 55))