//INTERPRETAÇÃO DE CÓDIGO

//<--------------------- Exercicio 1 --------------------

/*
1 - Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza?
    o código realiza o teste para saber se o numero é impar ou par, se for par o resto é 0 e aparace a mensagem no console "Passou no teste" se for impar o resto é 1 e aparece a mensagem "Não passou no teste"

b) Para que tipos de números ele imprime no console "Passou no teste"?
     Para numeros pares 

c) Para que tipos de números a mensagem é "Não passou no teste"? 
    Para numeros impares 

*/

//<--------------------- Exercicio 2 --------------------

/*
2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
    pede para o usuario uma fruta e retorna uma mensagem com a fruta escolhida e o seu preço

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
    O preço da fruta maçã é R$ 2.25

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
    O preço da fruta Pêra é R$ 5.5

*/

//<--------------------- Exercicio 3 --------------------

/*
3- Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
    Pedindo para o usuario inserir um numero e convertendo a resposta em numero 

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
  Se o usuario digitar 10 aparecerá a mensagem "Esse numero passou no teste". Ele digitar -10 aparecerá "menssagem is not defined" porque a mensagem secreta está declarada dentro de um escopo fechado e não global

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
  Sim haverá um erro porque a variavel mensagem está em um escopo que não é global, logo não pode ser lida 

*/

// ESCRITA DE CÓGIGO 

//<--------------------- Exercicio 1 --------------------

/* 
1-Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
  const idadeUsuario = Number(prompt("Digite a sua idade "))

b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
  const idadeUsuario = Number(prompt("Digite a sua idade "))

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

  const idadeUsuario = Number(prompt("Digite a sua idade "))

  if (idadeUsuario >= 18){
    console.log (" Você pode dirigir ")
  } else { 
    console.log (" Você não pode dirigir ")
  }
*/

//<--------------------- Exercicio 2 --------------------

/*
2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

  const periodo = prompt ("Digite seu horario de estudo, sendo M = Matutino, V = vespertino ou N = Noturno").toUpperCase

    let periodoM = ("M")
    let periodoV = ("V")
    let periodoN = ("N")

    if (periodo = periodoM ) {
      console.log ("Bom-dia!")
    } if (periodo === periodoV){
        console.log("Boa Tarde!")
    } else if (periodo === periodoN ) {
      console.log ("Boa noite!")
    }
*/

//<--------------------- Exercicio 3 --------------------




//<--------------------- Exercicio 4 --------------------