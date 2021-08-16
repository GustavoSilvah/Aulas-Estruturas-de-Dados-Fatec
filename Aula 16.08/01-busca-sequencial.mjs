/*
    ALGORITMO DE BUSCA SEQUENCIAL

    Percorre o vetor, verificando se cada um dos elementos corresponde
    ao valor de busca. Ao encontrar uma correspondência, retorna a posição
    onde o valor de busca està no vetor.

    Caso o valor de busca não exista no vetor, retorna o valor convencional
    -1.
*/

function buscaSequencial(vetor, valorBusca) {
    // Percurso do vetor com for tradicional
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca) return i// Encontrou valorBusca
    }
    return -1   // valorBusca não existe em vetor
}

const frutas = ['laranja', 'maçã', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão']

console.log('Posição de uva:', buscaSequencial(frutas, 'uva'))
console.log('Posição de laranja:', buscaSequencial(frutas, 'laranja'))
console.log('Posição de mamão:', buscaSequencial(frutas, 'mamão'))
console.log('Posição de abacate:', buscaSequencial(frutas, 'abacate'))

// Número de comparações em um vetor de n elementos:
// Quando valorBusca é encontrado: pos + 1
// Quando valorBusca não é encontrado: n

import { nomes } from "../data/vetor-nomes.mjs"

console.log('Procura de GUSTAVO', buscaSequencial(nomes, 'GUSTAVO'))