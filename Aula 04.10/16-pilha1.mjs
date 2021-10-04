/*
    PALÍNDROMO: texto que pode ser lido de trás para frente e
    continua idêntico
*/

let frase = 'Socorram-me, subi no ônibus em Marrocos';

/*
    Problema: inverter a frase para verificar se é um palíndromo
*/

let vetor = []    // Vetor vazio

// Percorre a frase e coloca cada uma das letras dela
// dentro do vetor reverso
for(let i = 0; i < frase.length; i++) {
    vetor.push(frase.charAt(i))
}

/*****************************************************/

// Descaracterizando a Pilha(inserindo ou removendo de posições 
// proibidas)

// Insere na primeria posição
vetor.unshift('X')

// Insere na 12ª posição
vetor.splice(11, 0, 'W')

// Remove a 23ª posição
vetor.splice(22, 1)

/*****************************************************/

console.log(vetor)

let reverso = '';

while(vetor.length > 0) {
    reverso += vetor.pop()  // Retira do final do vetor
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