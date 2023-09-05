 function compras(trabalho1, trabalho2){

    const comprarSorvete = trabalho1 || trabalho2
    const comprartelevisao = trabalho1 && trabalho2 // curto circúito
    const comprartelevisao30 = trabalho1 != trabalho2
    const mantersaudavel = !comprarSorvete

    return {comprarSorvete, comprartelevisao, comprartelevisao30, mantersaudavel}
 }

 console.log(compras(true, false))