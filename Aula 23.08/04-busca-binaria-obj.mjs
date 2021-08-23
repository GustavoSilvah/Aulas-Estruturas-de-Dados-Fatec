let comps

function buscaBinaria(vetor, valorBusca, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length - 1

    while (fim >= ini) {
        comps++

        // Math.floor() retira as casas decimais de um número;
        let meio = Math.floor((ini + fim) / 2)

        switch(fnComp(vetor[meio])) {
            case 0: // Econtrando o valor de busca
                return meio
            
            case 1: // Valor busca > valor do meio do vetor
                ini = meio + 1
                break

            default:    // -1, valor de busca > valor do meio do vetor
                fim = meio - 1
        }

        // Se o valor de busca for igual ao valor do vetor
        // na posição do meio, encontramos o que procuramos
        // e retornamos a posição onde encontramos
        if(valorBusca === vetor[meio]) {
            comps++
            return meio
        }

        // Senão, se o valor de busca for maior que o valor
        // do meio do vetor, descatamos a metade esquerda
        // do vetor trazendo o ponteiro ini para meio + 1
        else if(valorBusca > vetor[meio]) { 
            comps += 2
            ini = meio + 1
        }
        // Por fim, caso o valor de busca seja menor que o
        // valor do meio do vetor, descartamos a metade direita
        // do vetor trazendo o ponteiro fim para meio - 1
        else {
            comps += 2
            fim = meio - 1
        }
    }
    
    // se chegamos até aqui, significa que fim < ini , e portanto,
    // o valor de busca não existe no vetor. Para indicar isso,
    // retornamos o valor convencional -1
    return -1
}

/*
    Na busca binária, a comparação entre o valor de busca e o valor
    que está no meio do vetor tem três possibilidades:
    1ª -> ambos os valores são IGUAIS
    2ª -> o valor de busca é MAIOR que o valor do meio do vetor
    3ª -> o valor de busca é MENOR que o valor do meio do vetor

    Para usar a busca binária em um VETOR DE OBJETOS, precisamos
    transferir a comparação para uma função externa que retorne um
    dos três valores:
    0 -> caso ambos os valores sejam IGUAIS
    1 -> caso o valor de busca seja MAIOR que o valor do meio do vetor
    -1 -> caso o valor de busca seja MENOR que o valor do meio do vetor
*/ 

function comparar(valorMeio, valorBusca = 'GUSTAVO') {
    if(valorBusca === valorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}
