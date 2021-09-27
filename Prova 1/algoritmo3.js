/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

// A função "z" é o método "Selection Sort";
const z = y => {    // O "y" é o vetor passado como parâmetro

    // A variável x, é a posição de seleção do vetor;
    for(let x = 0; x < y.length - 1; x++) { 

        let w = x + 1   //  Adiciona +1 ao x;

        // Loop para procurar o menor valor no retante do vetor;
        for(let i = w + 1; i < y.length; i++) {
            // A variável i, é a posição de w + 1, neste caso, sendo a posição maior do vetor;
            if(y[w] > y[i]) w = i
            // Aqui, o W vao receber a po
        }

        // Se o valor em posMenor for menor que o valor em posSel, efetua a troca;
        if(y[x] > y[w]) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
        }
    }
}

let nums = [77, 44, 22, 99, 55, 88, 0, 33, 22, 11]

z(nums)
console.log(nums)