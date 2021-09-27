/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

// Método de "busca binária"
const z = (y, x) => {

    let w = 0 // Variável da posição inicial do vetor;
    let v = y.length - 1 // Variável da posição final do vetor;

    while(v >= w) {
        // Variável da posição do meio do vetor;
        let u = Math.floor((w + v) / 2) 

        // Se o valor de "x" for igual ao valor de "y" na posição meio(u), então ele retorna a posição atual;
        if(x === y[u]) return u 
        else if(x > y[u]) w = u + 1 // Se o valor de "x" for maior que o valor de "y" na posição meio, então o valor inicial(w) recebe meio(u) + 1 ;
        else v = u - 1 // Se não a variável da posição final(v) recebe meio(u) - 1;
    }
    return -1
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

let numsOrd = z(nums, 99);

console.log(numsOrd)