const ImprimirResultado = function(nota){

    switch(Math.floor(nota)){

        case 10: case 9:
            console.log("Meus parabéns!!!")
            break

        case 8: case 7:
            console.log("Aprovado!!!")
            break

        case 6: case 5:
            console.log("Recuperação!!!")
        
        case 4: case 3: case 2: case 1:
            console.log("Reprovado!!!")
            break

        default:
            console.log("Nota Inválida!!!")    
    }
}

ImprimirResultado(10)
ImprimirResultado(4.3)
ImprimirResultado(66)