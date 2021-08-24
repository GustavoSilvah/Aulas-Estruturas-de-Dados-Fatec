/*
BUBBLE SORT
Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.
Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada.
*/

function bubbleSort(vetor) {
    let trocou

    do{
        trocou = false

        // Percurso for tradicional até a PENÚLTIMA posição
        for(let i = 0; i < vetor.length - 1; i++) {
            if(vetor[i] > vetor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1]] = [ vetor[i + 1], vetor[i] ]
                trocou = true
            }

        }

    } while(trocou)
}

let nums = [ 77, 44, 22, 99, 55, 88, 0, 33, 22, 11]

bubbleSort(nums)
console.log(nums)