const pontuação = "12, 33, 44, 20, 12, 33, 44, 2, 12, 33, 0"

function comparajogos(string){

let pontuações = string.split(", ")
let record = 0
let count = -1
let piorpontuação = 100

for(let i = 0; i < pontuações.length; i++){

    if(pontuações[i] > record){

        record = pontuações[i]
        count++

       }

    if(pontuações[i] < piorpontuação){

        piorpontuação = pontuações[i]

        }
    

        
    }
    
    let array = [count, piorpontuação]

    console.log(array)
}

comparajogos(pontuação)