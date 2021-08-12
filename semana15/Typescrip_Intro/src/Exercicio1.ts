/*
Exercicio 1 

1 - a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

Resposta: 

let minhaString: string = 20

Ao atribuir um numero a uma variavel do tipo string aparece um erro, dizendo que um numero não pode ser atribuido a uma variavel do tipo string 


1-b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

let meuNumero: number = 20
 
A variavel acima pode aceitar uma string se adicionarmos uma estrutra de barra e mais um tipo aceitavel, assim ela ficaria: 

let meuNumero: number| string = 20

1-c)Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

nome, que é uma string;

idade, que é um número;

corFavorita, que é uma string.

type person = {
    nome: string, 
    idade: number, 
    corFavorita:string
}

const person1:person = {
    nome:'Mario', 
    idade: 25,
    corFavorita:'Amarelo'
}
const person2:person = {
    nome:'Camila', 
    idade: 22,
    corFavorita:'Preto'
}
const person3:person = {
    nome:'André', 
    idade: 40,
    corFavorita:'Verde'
}


1 -d)Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

enum escolherCorFavorita {
     AMARELO = "Amarelo",
     CINZA = "Cinza",
     LILAS = "Lilas",
     PRETO = "Preto"
 }
const person4:person = {
    nome:'Mario', 
    idade: 25,
    corFavorita:escolherCorFavorita.AMARELO
}
const person5:person = {
    nome:'Camila', 
    idade: 22,
    corFavorita:escolherCorFavorita.PRETO
}
const person6:person = {
    nome:'André', 
    idade: 40,
    corFavorita:escolherCorFavorita.VERDE
}


*/


