/*
    PALÍNDROMO: texto que pode ser lido de trás para frente e
    continua idêntico
*/

import Stack from '../lib/Stack.mjs'

let frase = 'Socorram-me, subi no ônibus em Marrocos';

/*
    Problema: inverter a frase para verificar se é um palíndromo
*/

let pilha = new Stack()   // Vetor vazio

// Percorre a frase e coloca cada uma das letras dela
// dentro da pilha
for(let i = 0; i < frase.length; i++) {
    pilha.push(frase.charAt(i))     // Insere no final da pilha
}

console.log(pilha.print())

let reverso = '';

// Enquanto a pilha não estiver vazia, eu vou tirando dela
while(! pilha.isEmpty) {
    reverso += pilha.pop()  // Retira do final da pilha
}

console.log(reverso)

/*
    PILHA
    É uma estrutura de dados em que, usando uma lista linear (vetor) como
    base, permite inserções apenas no final e remoções também a partir do
    final.
    Com isso, temos o comportamento conhecido como LIFO = Last In, First Out
    (último a entrar, primeiro a sair).
    Pilhas são usadas em tarefas computacionais que requerem a inversão da
    ordem de entrada dos dados.
*/