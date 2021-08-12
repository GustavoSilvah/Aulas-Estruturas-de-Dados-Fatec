/* 
    Objetos são estruturas da linguagem JS que permitem armazenar
    múltiplos valores em uma variável, tal como os vetores. No
    entanto, ao contrário destes, as posições dos valores são
    NOMEADAS, não NUMERADAS.
*/

// Criação de um objeto vazio
let objeto1 = new Object()  // Forma tradicional
let objeto2 = {}            // Forma moderna

// Criação objetos já com propriedades
// Uma propriedade é um par formado pelo nome da propriedade
// e o valor dela, separados por dois pontos
// Propriedades são também chamadas de atributos
let pessoa = {
    nome: 'Juracir Junqueira',
    sexo: 'M',
    dataNasc: '2000-09-18',
    ocupacao: 'estudante',
    // Quando nomes de propriedades contêm espaços ou caracteres acentuados,
    // eles devem vir ENTRE ASPAS
    'cidade de origem': 'Franca/SP',
    'série': '3º C',
    gostos: ['jogar', 'comer doces', 'dormir']
}

// Acessando as propriedades de um objeto
console.log(pessoa.nome)
console.log(pessoa.gostos)

// Quando o nome da propriedade contém espaços ou acentos,
// devemos acessá-la usando a SINTAXE DOS COLCHETES`1
console.log(pessoa['cidade de origem'])
console.log(pessoa['série'])

// A SINTAXE DOS COLCHETES sempre funciona!
console.log(pessoa['dataNasc'])
console.log(pessoa['ocupacao'])

// Uma consequência da sintaxe dos colchetes é a possibilidade de
// ter nomes de propriedades de dentro de variáveis

console.log('------------------------------------------------')
// Vetor com o nome das propriedades
let props = ['nome', 'sexo', 'dataNasc', 'ocupacao']

for(let p of props) {
    console.log(pessoa[p])
}

console.log('------------------------------------------------')

// Acrescentando novas propriedades a um objeto existente
pessoa.email = 'juracir@gmail.com'
pessoa['telefone contato'] = '(16) 99999-888'

console.log(pessoa) // Exibindo objeto inteiro

console.log('------------------------------------------------')

// Iniciando um ojeto vazio e criando as propriedades depois
let carro = {}
carro.modelo = 'Volkswagen'
carro.marca = 'Fusca'
carro.cor = 'Preto'
carro.ano = 1969
carro['nome proprietário'] = 'Juscelina Jordão'

console.log(carro)

console.log('------------------------------------------------')

// for..in: retorna as propriedades de um objeto
for(let prop in pessoa) {
    console.log(prop)
}

console.log('------------------------------------------------')
console.log('Exibindo os nomes das propriedades do objeto "carro": ')

for(let atrib in carro) {
    console.log(atrib)
}

console.log('------------------------------------------------')
// for..in pode ser utilizado juntamente com a sintaxe dos colchetes
// para recuperar o valor de todas as propriedades de um objeto
for(let p in pessoa) {
    console.log(`${p} -> ${pessoa[p]}`)
}