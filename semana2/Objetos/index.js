// INTERPRETAÇÃ DE CÓDIGO

//<--------------------- Exercicio 1 --------------------

// 1 - Leia o código abaixo

/*

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

A) O que vai ser impresso no console?

No console aparecerá, o primeiro nome do elenco, Matheus Nachtergaele, o ultimo nome no elenco Virginia Cavendish e o segundo horario de trasmissão "Canal Brasil", horario "19h"

*/

//<--------------------- Exercicio 2 --------------------

//2 - Leia o código abaixo

/*

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?
    Irá aparecer todos os atributos do chachorro, nome, idade e raça. Em seguida, o nome será substituido por "Juba". Em seguida todos os "a" em nome são substituidos por "o"

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
	Copia todo um objeto para outro 

*/

//<--------------------- Exercicio 3 --------------------

// 3 - 3. Leia o código abaixo

/*

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
	Vai ser impresso no console false, que está atribuida a opção backender e undefined, por que a caracteristica altura não foi definida

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
	Sim, por que a altura não foi definida dentro do objeto 

*/

// ESCRITA DE CÓDIGO 

//<--------------------- Exercicio 1 --------------------


//1 - Resolva os passos a seguir 

/*

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

		// Exemplo de entrada
				const pessoa = {
  					 nome: "Amanda", 
  					 apelidos: ["Amandinha", "Mandinha", "Mandi"]
				}

		// Exemplo de saída
		"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"



const pessoa = {
	nome:"Luis",
	apelidos: ["Luizinho ", " Lu ", " Lulu "]
}

console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)



b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto



const pessoaNova = {
	...pessoa,
	apelidos: ["Nego ", " Amado ", " Querido "]
}
 console.log (`Eu sou ${pessoaNova.nome}, mas pode me chamar de: ${pessoaNova.apelidos}`)

*/

//<--------------------- Exercicio 2 --------------------

// 2 - Resolva os passos a seguir

/*

a)  Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.



const cobaiaA = {
	nome : "Pedro",
	idade: 37,
	profissão: "Pedreiro"
}

const cobaiaB = {
	nome : "Carlos",
	idade: 40,
	profissão: "Padeiro"
}

*/

//<--------------------- Exercicio 3 --------------------