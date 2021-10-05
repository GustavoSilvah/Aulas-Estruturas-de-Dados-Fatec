/*
    ESTRUTURA DE DADOS FILA
    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/
export default class Queue {

    #data       // Vetor privado

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Método para inserção na fila
    enqueue(val) {
        this.#data.push(val)
    }

    // Método para remoção da fila
    dequeue() {
        return this.#data.shift()    
    }
}