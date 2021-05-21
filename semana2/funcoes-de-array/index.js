// INTERPRETAÇÃO DE CÓDIGO

//<--------------------- Exercicio 1 --------------------

/*
1- Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O que vai ser impresso no console?
    Será impresso no console o nome dos usuarios seguido por seu numero no indice e seu apelido 
*/

//<--------------------- Exercicio 2 --------------------

/*
2 - Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) O que vai ser impresso no console?
    Será impresso no console apenas os nomes dos usuarios 
*/

//<--------------------- Exercicio 3 --------------------

/*
3 - Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) O que vai ser impresso no console?
    Será impresso no console tudo o que for diferente do  objeto que contem o apelido Chijo
*/

//<------------------------------------------------------

//ESCRITA DE CÓDIGO 

//<--------------------- Exercicio 1 --------------------

/*
1 -Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

a) Crie um novo array que contenha apenas o nome dos doguinhos

   const listaNomes = pets.map ((item, index, array) => {
        return item.nome
})  

console.log (listaNomes)

b) Crie um novo array apenas com os cachorros salsicha

    const apenasSalsicha = pets.filter((item, index, array) =>{
        return item.raca === "Salsicha"
})

console.log(apenasSalsicha)

c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 const apenasPoodles = pets.filter((item, index, array) =>{
    return item.raca === "Poodle"
    
 })
 
 const mensagem = apenasPoodles.map ((item, index, array) => {
    return console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)

 })

*/

//<--------------------- Exercicio 2 --------------------

/*
2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

a) Crie um novo array que contenha apenas o nome de cada item


*/