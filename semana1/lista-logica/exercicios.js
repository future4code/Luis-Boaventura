// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = prompt('Digite a altura')
   const largura = prompt('Digite a largura')
      
   console.log(altura * largura)
}


//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoAtual = prompt ('Digite o ano atual')
   const anoNascimento = prompt ('Digite o ano de nascimento')

   console.log (anoAtual - anoNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   const iMC =  (Number(peso)) / ((Number(altura)) * (Number(altura)))
   return iMC
   console.log ("Seu imc é atual é ", iMC,)
}


//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt (" Digite seu nome ")
   const idade = prompt ("Digite sua idade")
   const email = prompt (" Digite seu email")
   console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const corFarorita1 = prompt ("Qual sua 1º cor favorita ?")
   const corFarorita2 = prompt ("Qual sua 2º cor favorita ?")
   const corFarorita3 = prompt ("Qual sua 3º cor favorita ?")
   const array = [corFarorita1, corFarorita2, corFarorita3]
   console.log (array)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   const novaString = string.toUpperCase()
   return novaString
   console.log (novaString)
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   const valorTotal = custo/valorIngresso
   return valorTotal
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const comparado = string1.length === string2.length
  return comparado
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   const array1 = array[0]
   return array1
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   const array1 = array[array.length-1]
   return array1
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   const primeiroNumero = array[0]
   array[0] = array[array.length-1]
   array[array.length-1]= primeiroNumero
   return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   const stringComparada = string1.toLowerCase() === string2.toLowerCase()
   return stringComparada
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const anoAtual = ("Qual o ano atual?")
   const nascimento = ("Qual seu ano de nascimento ")
   const anoCarteira = ("Qual o ano em que sua carteira de identidade foi emitida?")
   const verificaAno = anoAtual - nascimento


}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   const idade = ("Você tem mais de 18 anos ?").toLowerCase()
   const conferirIdade = (idade == "sim")

   const escolaridade = (" Você possui ensino médio completo ?").toLowerCase()
   const conferirEscolaridade = (escolaridade == "sim")

   const disponibilidade = ("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()
   const conferirDisponibilidade = (disponibilidade == "sim")

   console.log (conferirIdade, conferirEscolaridade, conferirDisponibilidade)
}