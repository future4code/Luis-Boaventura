//INTERPRETAÇÃO DE CÓDIGO 

//<--------------------- Exercicio 1 --------------------

 /*
1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

    O contador adiciona um numero a variavel valor, somando sempre o ultimo numero mais o indice e fará isso por 5 vezes, mostrando no final  numero 10

 */

//<--------------------- Exercicio 2  --------------------

/*
2 - Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?
    O código imprime no console todos os numero maiores que 18

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

    sim é suficiente, mas é necessario adicionar console.log ("esse numero de indice é", lista.indexOf(lista[i]))
*/

//<--------------------- Exercicio 3  --------------------

/*
3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

Adiciona linhas e baseado no numero da linha impreme a quanditade de 0

*/

//INTERPRETAÇÃO DE CÓDIGO

//<--------------------- Exercicio 1  --------------------
/*
1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

a)Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
*/

/*
const array = []
const Verificação
const numeroDeBixos = Number(prompt("Quantos animias de estimação você tem?"))
if (numeroDeBixos === 0 ){
    console.log("Que pena! Você pode adotar um pet!")
} 

*/