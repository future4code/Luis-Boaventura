// ----------------------> Exemplos <---------------------------

console.log('Olá, Molina!')



// INTERPRETAÇÃO DE CÓDIGO

// ----------------------> Exercicio 1 <---------------------------

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

// a)True   b)True c)False d)string

*/

// ----------------------> Execicio 2 <---------------------------

/*

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//Será impresso o primeiroNumero concatenado com o segundo (apenas um do lado do outro) não somado 
*/

// ----------------------> Exercicio 3 <---------------------------

/*

const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")

let soma = (Number(primeiroNumero) + Number(segundoNumero))

console.log(soma)
 
*/

//ESCRIA DE CÓDIGO

// ----------------------> Exercicio 1 <---------------------------


/*

const suaIdade = prompt ("Qual a sua idade ?")
const idadeAmigo = prompt (" Qual a idade do seu melhor amigo")

const resposta = (Number (suaIdade)) === (Number(idadeAmigo))
const resposta2 = (Number (suaIdade)) - (Number(idadeAmigo))

console.log ("Sua idade é maior que a do seu melhor amigo", resposta)
console.log ("A diferença de idade", resposta2 )

*/

// ----------------------> Exercicio 2 <---------------------------

/*

const numeroPar = prompt ("Insira um numero Par!")
let respostaDaDiv = (Number(numeroPar))/2

console.log(respostaDaDiv)

//Todos os numeros são dividos independente se são par ou impar , mas o resto aparece depois do ponto

*/

// ----------------------> Exercicio 3 <---------------------------

/*

const idadeAnos = prompt ("Qual a sua idade?")

console.log ("Em meses", (Number(idadeAnos))*12)
console.log ("Em dias", (Number(idadeAnos))*365)
console.log ("Em horas", (Number(idadeAnos))*24*30*12*28)

*/

// ----------------------> Exercicio 4 <---------------------------

/*

const numPrimeiro = prompt ("Insira o Primeiro Numero ")
const numSegundo = prompt ("Insisra o segundo Numero")

let resp = (Number(numPrimeiro)) > (Number(numSegundo))
console.log ("O primeiro numero é maior que segundo?", resp)

let resp2 = (Number(numPrimeiro))=== (Number(numSegundo))
console.log ("O primeiro numero é igual ao segundo?", resp2) 

let resp3 = (Number(numPrimeiro))/(Number(numSegundo))
console.log ("O primeiro numero é divisível pelo segundo?", resp3)

let resp4 = (Number(numSegundo))/(Number(numPrimeiro))
console.log("O segundo numero é divisível pelo primeiro?", resp4)

*/