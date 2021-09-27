/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo. - Algoritmo de busca MergeSort
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

// A função "z" é o método "Merge Sort"
const z = y => {
    if(y.length < 2) return y
    
    // Acha o meio aproximado do vetor;
    let x = Math.floor(y.length / 2)

    //divide um vetor da primeira posição informada até a última posição informada;
    let w = y.slice(0, x)   //  O vetor da esquerda a partir do início

    // a divisão vai da posição informada até o final do vetor;
    let v = y.slice(x)  // O vetor da direita a partir do vetor do meio;

    // Determinar qual dos vetores tem sobra;
    let u

    w = z(w)    // A função y recebe a cópia do array de w;
    v = z(v)    // A função z recebe a cópia do array de v;

    // Mesclagem ordenada de W com V;
    let t = 0, s = 0, r = []

    while(t < w.length && s < v.length) {
        // O menor elemento é o do vetor W;
        if(w[t] < v[s]) {
            r.push(w[t])   // O vetor "r" está recebendo o valor de "w" na posição "t"
            t++ // A variável t está incrementando o valor dela para o valor atual mais 1;
        }

        // O menor elemento é o do vetor V;
        else {
            r.push(v[s])    // O vetor "r" está recebendo o valor de "v" na posição "s"
            s++ // A variável s está incrementando o valor dela para o valor atual mais 1;
        }
    }

    // Sobra à esquerda, no caso vetor T;
    if(t < s) {
        // Copia para U todos os elementos a partir de W até o fim de V;
        u = w.slice(t)
    } else u = v.slice(s)

    // O vetor final ordenado será a concatenação de r + u;
    return [...r, ...u]
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

let numsOrd = z(nums)

console.log({numsOrd})