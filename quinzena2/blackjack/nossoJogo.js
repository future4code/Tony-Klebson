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
console.log("Boas vindas ao jogo de Blackjack!")

const jogoBlackjack = [
   { naipe: "♥️", valores: ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"] },
   { naipe: "♣️", valores: ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"] },
   { naipe: "♦️", valores: ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]  },
   { naipe: "♠️", valores: ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]  },
 ]


if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"

   comprarCarta()

} else {
	console.log("O Jogo Acabou")
}

