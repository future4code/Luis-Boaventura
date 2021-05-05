// INTERPRETAÇÃO DE CÓDIGO

//<--------------------- Exercicio 1 --------------------

/*

let array
console.log('a. ', array)// como não atribuido nada a array, o console mostrará undefined

array = null
console.log('b. ', array)// será mostrado null porque está sendo atribuido à array

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)// será mostrado a quantidade total de elementos dentro do array, 11

let i = 0
console.log('d. ', array[i])// aqui aparacerá o numero 3 porque no meu indice esse 3 corresponde a posição 0

array[i+1] = 19
console.log('e. ', array)// colocará o numero 19 na posição 1 do indice

const valor = array[i+6]
console.log('f. ', valor)// mostra o numero na 6 posição do indice, neste caso o numero 9

*/

//<--------------------- Exercicio 2 --------------------

/*

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// O retorno no console será : SUBI NUM ONIBUS EM MIRROCOS 28

*/

//ESCRITA DE CÓDIGO

//<--------------------- Exercicio 1 --------------------

/*

const seuNome = prompt ("Qual o seu nome?") 
const seuEmail = prompt ("Qual o seu e-mail?")

console.log ("O e-mail, " + seuEmail, " foi cadastrado com sucesso. Seja bem-vinda(o), " + seuNome, "!")

*/

//<--------------------- Exercicio 2 --------------------

/*

let i=0
let comidasPreferidas = [
    "lasanha",
    "strogonoff",
    "Carne de Panela ",
    "Bolo de Laraja ",
    "Pão com ovo"
]

console.log (comidasPreferidas)

console.log ("Essas são minhas comidas Preferidas : ", comidasPreferidas)


const suaComidaPreferida = prompt ("Qual a sua comida preferida ?")

comidasPreferidas [i+1] = suaComidaPreferida

console.log (comidasPreferidas)

*/

//<--------------------- Exercicio 3 --------------------

/*

let array = []
let listaDeTarefas = array

const suasTarefa1 = prompt ("Qual a 1ª tarefa que precisa fazer?")
const suasTarefa2 = prompt ("Qual a 2º tarefa que precisa fazer?")
const suasTarefa3 = prompt ("Qual a 3º tarefa que precisa fazer?")


array = suasTarefa1 + suasTarefa2 + suasTarefa3
console.log (array)

*/