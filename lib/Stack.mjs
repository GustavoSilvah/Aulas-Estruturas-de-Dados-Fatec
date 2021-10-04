/*
    ESTRUTURAS DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export default class Stack {

    #data   // Vetor privado

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Método para inserção do vetor
    push(val) {
        this.#data.push(val)
    }

    // Método para remoção do vetor
    pop() {
        return this.#data.pop()
    }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data)
    }
}

///////////////////////////////////////////////////

// Teste importado para pilha2 - Aula 04.10

// let pilha = new Stack()
// console.log(pilha.print())
// console.log('Está vazia?', pilha.isEmpty)

// pilha.push(35)
// pilha.push(77)
// pilha.push(19)
// console.log(pilha.print())
// console.log('Está vazia?', pilha.isEmpty)

// let removido = pilha.pop();
// console.log({removido}, pilha.print())

// let ultimo = pilha.peek()
// console.log({ultimo}, pilha.print())

// // Tentativa de inserção no início da pilha
// // pilha.unshift(90)
// // console.log(pilha.print())