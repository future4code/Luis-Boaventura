//INTERPRETAÇÃO DE CÓDIGO 

//<--------------------- Exercicio 1 --------------------

/*
1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

    No primeiro console.log aparecerá o numero 10 e no segundo console.log aparecerá 10 e 5  
*/

//<--------------------- Exercicio 2  --------------------

/*
2- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

A variavel c não foi declarada logo aparecerá um erro no console. Entretando mesmo que declarassemos essa variavel ela poteriormente teria o valor = 10 obdecendo aos critérios abaixo de c=a, b=c,a=b

*/

//<--------------------- Exercicio 3  --------------------

/*

3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//Novas variaveis com camelCase  p => totalHorasPorDia , t=> totalGanhosDia. Assim o código fica depois de refatorado: 

let totalHorasPorDia = prompt("Quantas horas você trabalha por dia?")
let totalGanhosDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${totalGanhosDia/totalHorasPorDia} por hora`)

*/

//<-----------------------------------------------------------

//ESCRITA DE CÓDIGO

//<--------------------- Exercicio 1  --------------------

/*
1 - Construa um programa, seguindo os seguintes passos:

a)Declare uma variável para armazenar um nome, sem atribuir um valor.

b)Declare uma variável para armazenar uma idade, sem atribuir um valor.

c)Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu


let nome 
const idade 
console.log (typeof nome)
console.log (typeof idade)

    //Será escrito na tela undefined por que não foi atribuido um valor para as variaveis 

nome = prompt("Qual o seu nome usuario?")
idade = prompt("Qual a sua idade")

console.log (typeof nome)
console.log (typeof idade)

    // Tudo o que é digitado no prompt aparece no console como string 

console.log (`Olá ${nome},  você tem ${idade} anos`)

*/
//<--------------------- Exercicio 2  --------------------

/*
2 - Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

a) Crie três novas variáveis, contendo as respostas

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    //Você está usando uma roupa azul hoje? - SIM

const primeraPergunta = ("Você gosta de comer salgados?")
const segndaPergunta = ("Você gosta de comer doces?")
const terceiraPergunta = ("Você gosta de tomar agua?")

const primeiraResposta = prompt("Você gosta de comer salgados?")
const segndaResposta = prompt("Você gosta de comer doces?")
const terceiraResposta = prompt("Você gosta de beber agua?")

console.log (primeiraPergunta, "-", primeiraResposta)
console.log (segundaPergunta, "-", segundaResposta)
console.log (terceiraPergunta, "-", terceiraResposta)

*/

//<--------------------- Exercicio 3  --------------------
/*
3- Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25

Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a. 

Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.

let a = 10
let b = 25

    // Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).


let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

*/

//<-----------------------------------------------------------

//Desafio 

/*
1 - Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

    1. O primeiro número somado ao segundo número resulta em: x.
    2. O primeiro número multiplicado pelo segundo número resulta em: y.

const numeroUm = Number(promt("Digite o primeiro numero"))
const numeroDois = Number(prompt("Digite o segundo numero"))

console.log (numeroUM + numeroDois)
console.log (numeroUm * numeroDois)

*/

const numeroUm = Number(prompt("Digite o primeiro numero"))
const numeroDois = Number(prompt("Digite o segundo numero"))

console.log ("A soma é ", numeroUm + numeroDois)
console.log ("A multiplicação é ", numeroUm * numeroDois)