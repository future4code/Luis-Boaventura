/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let pontosDoUsario = 0
let pontosDoComputador = 0

 console.log ("Bem vindo ao jogo de BlackJack")

      if (confirm("Você deseja começar um novo jogo?")) {
         console.log("Iniciada uma nova rodada");
              
         const carta = comprarCarta(); 




        if(pontosDoUsuario < pontosDoComputador){
           console.log ("Compuatador venceu")
        }
         else if(pontosDoComputador < pontosDoUsario ){
            console.log ("Usuario venceu")
         }
            else if (pontosDoComputador === pontosDoUsario)
            console.log ("empate")

   } else {
    console.log("O jogo acabou");
 }
