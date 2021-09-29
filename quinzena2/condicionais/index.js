// EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

//----------- EXERCICIO 1 --------------
/*
A) O teste verifica se o numero digitado no prompt é par
B) Para os numeros divisiveis por dois (Resto Zero), ou seja numeros pares
C) Para qualquer resultado diferente de Zero na divisão por 2, ou seja numeros impares

//----------- EXERCICIO 2 --------------

/*
A) Serve para mostrar o preço da fruta digitada no prompt
B) O preço da fruta, maça é, R$ 2.25
C) O preço da fruta, pêra é, R$ 5.5

//----------- EXERCICIO 3 --------------

A) a primeira linha está solicitando a entrada pelo prompt, guardando o valor do numero inserido na variavel numero
B)  10 = Esse número passou no teste     -10 = Não imprimeria nada
C) Sim, A variavel Mensagem foi declarada dentro da função e está sendo chamada fora (no escopo Global)

*/


// EXERCICIO DE ESCRITA DE CÓDIGO

//----------- EXERCICIO 1 --------------
/*
const idadeUsuario= Number (prompt("Qual a sua idade"))
    if (idadeUsuario >= 18){
    console.log ("Parabéns! Você pode dirigir")
    } else 
    console.log("Ops! você não pode dirigir")
*/

//----------- EXERCICIO 2 --------------
/*
const turnoUsuario = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno) ")
if (turnoUsuario=== "M"){
    console.log("Bom dia!")
}else if(turnoUsuario==="V"){
    console.log("Boa tarde!")
} else if (turnoUsuario==="N") {
console.log("Boa noite!")
}else
console.log("Entrada inválida! Por favor, Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
*/
//----------- EXERCICIO 3 --------------
/*
const turnoUsuario = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno) ")
switch (turnoUsuario){
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;

        default:
        console.log("Entrada inválida! Por favor, Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
}
*/

//----------- EXERCICIO 4 --------------
/*
const generoDoFilme = prompt("Digite o Gênero do Filma:")
const precoIngresso = Number (prompt("Digite o valor do ingresso"))

if (generoDoFilme === "fantasia" && precoIngresso < 15){
    console.log("Bom Filme!")
} else
console.log ("Escolha outro filme :(")
*/

//----------- DESAFIO --------------

//1) 
/*
const generoDoFilme = prompt("Digite o Gênero do Filma:")
const precoIngresso = Number (prompt("Digite o valor do ingresso"))
const lanchinho = prompt("Qual o Lanchinho você irá comprar?")

if (generoDoFilme === "fantasia" && precoIngresso < 15){
    console.log(`Bom Filme! E aproveite o seu ${lanchinho}`)
} else
console.log ("Escolha outro filme :(")
*/
// 2)

const nomeUsuario = prompt("Digite seu nome Completo: ")
const tipoDoJogo = prompt("Digite a etapa do jogo: IN indica internacional; e DO indica doméstico;")
const etapaDoJogo = prompt("Digite o tipo de Jogo SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final:")
let categorias = Number (prompt("Digite a categoria 1, 2, 3, ou 4:"))
let quantidadeDeIngressos = Number (prompt("Digite a quantidade de ingressos desejados:"))
let preco
let valorTotal
if (tipoDoJogo==="DO" && etapaDoJogo==="SF" && categorias===1){
    preco = 1320,00
    valorTotal = preco *quantidadeDeIngressos
console.log("---Dados da compra---")
console.log(`Nome do Cliente: ${nomeUsuario}`)
console.log ("Tipo de Jogo: Nacional")
console.log ("Etapa do Jogo: Semi-Final")
console.log (`Categoria: ${categorias} `)
console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
console.log (`------- Valores ----------`)
console.log (`Valor do ingresso: R$ ${preco}`)
console.log (`Valor total: R$ ${valorTotal}`)
console.log (`SF`)



} else if (tipoDoJogo==="DO" && etapaDoJogo==="SF" && categorias===2){
preco = 880,00
valorTotal = preco *quantidadeDeIngressos
console.log("---Dados da compra---")
console.log(`Nome do Cliente: ${nomeUsuario}`)
console.log ("Tipo de Jogo: Nacional")
console.log ("Etapa do Jogo: Semi-Final")
console.log (`Categoria: ${categorias} `)
console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
console.log (`------- Valores ----------`)
console.log (`Valor do ingresso: R$ ${preco}`)
console.log (`Valor total: R$ ${valorTotal}`)
console.log (`SF`)
} else if (tipoDoJogo==="DO" && etapaDoJogo==="SF" && categorias===3){
preco = 550,00
valorTotal = preco *quantidadeDeIngressos
console.log("---Dados da compra---")
console.log(`Nome do Cliente: ${nomeUsuario}`)
console.log ("Tipo de Jogo: Nacional")
console.log ("Etapa do Jogo: Semi-Final")
console.log (`Categoria: ${categorias} `)
console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
console.log (`------- Valores ----------`)
console.log (`Valor do ingresso: R$ ${preco}`)
console.log (`Valor total: R$ ${valorTotal}`)
console.log (`SF`)
}else if (tipoDoJogo==="DO" && etapaDoJogo==="SF" && categorias===4){
    preco = 220,00
    valorTotal = preco *quantidadeDeIngressos
    console.log("---Dados da compra---")
    console.log(`Nome do Cliente: ${nomeUsuario}`)
    console.log ("Tipo de Jogo: Nacional")
    console.log ("Etapa do Jogo: Semi-Final")
    console.log (`Categoria: ${categorias} `)
    console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
    console.log (`------- Valores ----------`)
    console.log (`Valor do ingresso: R$ ${preco}`)
    console.log (`Valor total: R$ ${valorTotal}`)
    console.log (`SF`)

    // CATEGORIA DT
}else if (tipoDoJogo==="DO" && etapaDoJogo==="DT" && categorias===1){
        preco = 660,00
        valorTotal = preco *quantidadeDeIngressos
console.log("---Dados da compra---")
console.log(`Nome do Cliente: ${nomeUsuario}`)
console.log ("Tipo de Jogo: Nacional")
console.log ("Etapa do Jogo: Decisão Terceiro Lugar")
console.log (`Categoria: ${categorias} `)
console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
console.log (`------- Valores ----------`)
console.log (`Valor do ingresso: R$ ${preco}`)
console.log (`Valor total: R$ ${valorTotal}`)
console.log (`DT`)
} else if (tipoDoJogo==="DO" && etapaDoJogo==="DT" && categorias===2){
        preco = 440,00
        valorTotal = preco *quantidadeDeIngressos
        console.log("---Dados da compra---")
        console.log(`Nome do Cliente: ${nomeUsuario}`)
        console.log ("Tipo de Jogo: Nacional")
        console.log ("Etapa do Jogo:  Decisão Terceiro Lugar")
        console.log (`Categoria: ${categorias} `)
        console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
        console.log (`------- Valores ----------`)
        console.log (`Valor do ingresso: R$ ${preco}`)
console.log (`Valor total: R$ ${valorTotal}`)
        console.log (`DT`)
}else if (tipoDoJogo==="DO" && etapaDoJogo==="DT" && categorias===3){
            preco = 330,00
            valorTotal = preco *quantidadeDeIngressos
            console.log("---Dados da compra---")
            console.log(`Nome do Cliente: ${nomeUsuario}`)
            console.log ("Tipo de Jogo: Nacional")
            console.log ("Etapa do Jogo: S Decisão Terceiro Lugar")
            console.log (`Categoria: ${categorias} `)
            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
            console.log (`------- Valores ----------`)
            console.log (`Valor do ingresso: R$ ${preco}`)
            console.log (`Valor total: R$ ${valorTotal}`)
            console.log (`DT`)
} else if (tipoDoJogo==="DO" && etapaDoJogo==="DT" && categorias===4){
                preco = 170,00
                valorTotal = preco *quantidadeDeIngressos
                console.log("---Dados da compra---")
                console.log(`Nome do Cliente: ${nomeUsuario}`)
                console.log ("Tipo de Jogo: Nacional")
                console.log ("Etapa do Jogo:  Decisão Terceiro Lugar")
                console.log (`Categoria: ${categorias} `)
                console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                console.log (`------- Valores ----------`)
                console.log (`Valor do ingresso: R$ ${preco}`)
                console.log (`Valor total: R$ ${valorTotal}`)
                console.log (`DT`)
                // CATEGORIA FI
}else if (tipoDoJogo==="DO" && etapaDoJogo==="FI" && categorias===1){
                    preco = 1980,00
                    valorTotal = preco *quantidadeDeIngressos
                    console.log("---Dados da compra---")
                    console.log(`Nome do Cliente: ${nomeUsuario}`)
                    console.log ("Tipo de Jogo: Nacional")
                    console.log ("Etapa do Jogo: Final")
                    console.log (`Categoria: ${categorias} `)
                    console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                    console.log (`------- Valores ----------`)
                    console.log (`Valor do ingresso: R$ ${preco}`)
                    console.log (`Valor total: R$ ${valorTotal}`)
                    console.log (`FI`)
} else if (tipoDoJogo==="DO" && etapaDoJogo==="FI" && categorias===2){
                    preco = 1320,00
                    valorTotal = preco *quantidadeDeIngressos
                    console.log("---Dados da compra---")
                    console.log(`Nome do Cliente: ${nomeUsuario}`)
                    console.log ("Tipo de Jogo: Nacional")
                    console.log ("Etapa do Jogo: Final")
                    console.log (`Categoria: ${categorias} `)
                    console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                    console.log (`------- Valores ----------`)
                    console.log (`Valor do ingresso: R$ ${preco}`)
                    console.log (`Valor total: R$ ${valorTotal}`)
                    console.log (`FI`)
}else if (tipoDoJogo==="DO" && etapaDoJogo==="FI" && categorias===3){
                        preco = 880,00
                        valorTotal = preco *quantidadeDeIngressos
                        console.log("---Dados da compra---")
                        console.log(`Nome do Cliente: ${nomeUsuario}`)
                        console.log ("Tipo de Jogo: Nacional")
                        console.log ("Etapa do Jogo: Final")
                        console.log (`Categoria: ${categorias} `)
                        console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                        console.log (`------- Valores ----------`)
                        console.log (`Valor do ingresso: R$ ${preco}`)
                        console.log (`Valor total: R$ ${valorTotal}`)
                        console.log (`FI`)
} else if (tipoDoJogo==="DO" && etapaDoJogo==="FI" && categorias===4){
                            preco = 330,00
                            valorTotal = preco *quantidadeDeIngressos
                            console.log("---Dados da compra---")
                            console.log(`Nome do Cliente: ${nomeUsuario}`)
                            console.log ("Tipo de Jogo: Nacional")
                            console.log ("Etapa do Jogo: Final")
                            console.log (`Categoria: ${categorias} `)
                            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                            console.log (`------- Valores ----------`)
                            console.log (`Valor do ingresso: R$ ${preco}`)
                            console.log (`Valor total: R$ ${valorTotal}`)
                            console.log (`FI`)


                            // PUBLICO INTERNACIONAL
 }     else if (tipoDoJogo==="IN" && etapaDoJogo==="SF" && categorias===2){
    preco = 880*4,10
    valorTotal = preco *quantidadeDeIngressos
    console.log(`Nome do Cliente: ${nomeUsuario}`)
    console.log ("Tipo de Jogo: Internacional")
    console.log ("Etapa do Jogo: Semi-Final")
    console.log (`Categoria: ${categorias} `)
    console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
    console.log (`------- Valores ----------`)
    console.log (`Valor do ingresso: $ ${preco}`)
    console.log (`Valor total: $ ${valorTotal}`)
    console.log (`SF`)
    } else if (tipoDoJogo==="IN" && etapaDoJogo==="SF" && categorias===3){
    preco = 550*4,10
    valorTotal = preco *quantidadeDeIngressos
    console.log("---Dados da compra---")
    console.log(`Nome do Cliente: ${nomeUsuario}`)
    console.log ("Tipo de Jogo: Internacional")
    console.log ("Etapa do Jogo: Semi-Final")
    console.log (`Categoria: ${categorias} `)
    console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
    console.log (`------- Valores ----------`)
    console.log (`Valor do ingresso: $ ${preco}`)
    console.log (`Valor total: $ ${valorTotal}`)
    console.log (`SF`)
    }else if (tipoDoJogo==="IN" && etapaDoJogo==="SF" && categorias===4){
        preco = 220*4,10
        valorTotal = preco *quantidadeDeIngressos
        console.log("---Dados da compra---")
        console.log(`Nome do Cliente: ${nomeUsuario}`)
        console.log ("Tipo de Jogo: Internacional")
        console.log ("Etapa do Jogo: Semi-Final")
        console.log (`Categoria: ${categorias} `)
        console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
        console.log (`------- Valores ----------`)
        console.log (`Valor do ingresso: $ ${preco}`)
        console.log (`Valor total: $ ${valorTotal}`)
        console.log (`SF`)
    
        // CATEGORIA DT
    }else if (tipoDoJogo==="IN" && etapaDoJogo==="DT" && categorias===1){
            preco = 660*4,10
            valorTotal = preco *quantidadeDeIngressos
            console.log("---Dados da compra---")
            console.log(`Nome do Cliente: ${nomeUsuario}`)
            console.log ("Tipo de Jogo: Internacional")
            console.log ("Etapa do Jogo: Decisão Terceiro Lugar")
            console.log (`Categoria: ${categorias} `)
            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
            console.log (`------- Valores ----------`)
            console.log (`Valor do ingresso: $ ${preco}`)
            console.log (`Valor total: $ ${valorTotal}`)
            console.log (`DT`)
    } else if (tipoDoJogo==="IN" && etapaDoJogo==="DT" && categorias===2){
            preco = 440*4,10
            valorTotal = preco *quantidadeDeIngressos
            console.log("---Dados da compra---")
            console.log(`Nome do Cliente: ${nomeUsuario}`)
            console.log ("Tipo de Jogo: Internacional")
            console.log ("Etapa do Jogo: Decisão Terceiro Lugar")
            console.log (`Categoria: ${categorias} `)
            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
            console.log (`------- Valores ----------`)
            console.log (`Valor do ingresso: $ ${preco}`)
            console.log (`Valor total: $ ${valorTotal}`)
            console.log (`DT`)
    }else if (tipoDoJogo==="IN" && etapaDoJogo==="DT" && categorias===3){
                preco = 330*4,10
                valorTotal = preco *quantidadeDeIngressos
            console.log("---Dados da compra---")
            console.log(`Nome do Cliente: ${nomeUsuario}`)
            console.log ("Tipo de Jogo: Internacional")
            console.log ("Etapa do Jogo: Decisão Terceiro Lugar")
            console.log (`Categoria: ${categorias} `)
            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
            console.log (`------- Valores ----------`)
            console.log (`Valor do ingresso: $ ${preco}`)
            console.log (`Valor total: $ ${valorTotal}`)
            console.log (`DT`)
    } else if (tipoDoJogo==="IN" && etapaDoJogo==="DT" && categorias===4){
                    preco = 170*4,10
                    valorTotal = preco *quantidadeDeIngressos
                    console.log("---Dados da compra---")
                    console.log(`Nome do Cliente: ${nomeUsuario}`)
                    console.log ("Tipo de Jogo: Internacional")
                    console.log ("Etapa do Jogo: Decisão Terceiro Lugar")
                    console.log (`Categoria: ${categorias} `)
                    console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                    console.log (`------- Valores ----------`)
                    console.log (`Valor do ingresso: $ ${preco}`)
                    console.log (`Valor total: $ ${valorTotal}`)
                    console.log (`DT`)
                    // CATEGORIA FI
    }else if (tipoDoJogo==="IN" && etapaDoJogo==="FI" && categorias===1){
                        preco = 1980*4,10
                        valorTotal = preco *quantidadeDeIngressos
            console.log("---Dados da compra---")
            console.log(`Nome do Cliente: ${nomeUsuario}`)
            console.log ("Tipo de Jogo: Internacional")
            console.log ("Etapa do Jogo: Final")
            console.log (`Categoria: ${categorias} `)
            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
            console.log (`------- Valores ----------`)
            console.log (`Valor do ingresso: $ ${preco}`)
            console.log (`Valor total: $ ${valorTotal}`)
            console.log (`FI`)
    } else if (tipoDoJogo==="IN" && etapaDoJogo==="FI" && categorias===2){
                        preco = 1320*4,10
                        valorTotal = preco *quantidadeDeIngressos
                        console.log("---Dados da compra---")
                        console.log(`Nome do Cliente: ${nomeUsuario}`)
                        console.log ("Tipo de Jogo: Internacional")
                        console.log ("Etapa do Jogo: Final")
                        console.log (`Categoria: ${categorias} `)
                        console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                        console.log (`------- Valores ----------`)
                        console.log (`Valor do ingresso: $ ${preco}`)
                        console.log (`Valor total: $ ${valorTotal}`)
                        console.log (`FI`)
    }else if (tipoDoJogo==="IN" && etapaDoJogo==="FI" && categorias===3){
                            preco = 880*4,10
                            valorTotal = preco *quantidadeDeIngressos
                            console.log("---Dados da compra---")
                            console.log(`Nome do Cliente: ${nomeUsuario}`)
                            console.log ("Tipo de Jogo: Internacional")
                            console.log ("Etapa do Jogo: Final")
                            console.log (`Categoria: ${categorias} `)
                            console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                            console.log (`------- Valores ----------`)
                            console.log (`Valor do ingresso: $ ${preco}`)
                            console.log (`Valor total: $ ${valorTotal}`)
                            console.log (`FI`)
    }else if (tipoDoJogo==="IN" && etapaDoJogo==="FI" && categorias===4){
                                preco = 330*4,10
                                valorTotal = preco *quantidadeDeIngressos
                                console.log("---Dados da compra---")
                                console.log(`Nome do Cliente: ${nomeUsuario}`)
                                console.log ("Tipo de Jogo: Internacional")
                                console.log ("Etapa do Jogo: Final")
                                console.log (`Categoria: ${categorias} `)
                                console.log (`Quantidade de ingresso: ${quantidadeDeIngressos} `)
                                console.log (`------- Valores ----------`)
                                console.log (`Valor do ingresso: $ ${preco}`)
                                console.log (`Valor total: $ ${valorTotal}`)
                                console.log (`FI`)
     }else
    console.log("Ops! Algo deu errado, refaça a transação")
