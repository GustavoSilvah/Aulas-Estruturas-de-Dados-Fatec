
let pass = 0, comps = 0, trocas = 0;

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    
    // Só trabalhamos se a região do vetor tiver, pelo menos, 2 elementos
    if(fim <= ini) return  // Condição de saída

    pass++

    const pivot = fim
    let div = ini - 1

    // For indo da posição ini até fim - 1
    for(let i = ini; i < fim; i++) {
        comps++
        //if(vetor[pivot] > vetor[i]) {
        if(fnComp(vetor[pivot], vetor[i])) {
            div++
            if(div !== i) [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
            trocas++
        }
    }

    div++

    // Colocamos o pivô em seu lugar definitivo
    comps++
    //if(vetor[div] > vetor[pivot] && div !== pivot) {
    if(div !== pivot && fnComp(vetor[div], vetor[pivot])) {
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ]
        trocas++
    }

    // Chama o Quick Sort para o subvetor à esquerda do pivô
    quickSort(vetor, fnComp, ini, div - 1)

    // Chama o Quick Sort para o subvetor à direita do pivô
    quickSort(vetor, fnComp, div + 1, fim)
}

/*********************************************************************** */

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

quickSort(nums)

console.log(nums)
console.log({pass, comps, trocas})

/*********************************************************************** */

import { nomes } from '../data/nomes-desord.mjs'

pass = 0, comps = 0, trocas = 0;

console.time('Tempo de ordenação')
quickSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({pass, comps, trocas, memoriaMB})

/*********************************************************************** */

import { objMotoristas } from '../data/motoristas-obj-desord.mjs'

console.time('Tempo de ordenação')

// Ordenando por nome_motorista
//selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorista em orde DECRESCENTE
//selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista), 'pt-br' <= 0) // Muito lento

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
quickSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) { // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social 
})

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024

console.timeEnd('Tempo de ordenação')

console.log(objMotoristas)
console.log({pass, comps, trocas, memoriaMB})