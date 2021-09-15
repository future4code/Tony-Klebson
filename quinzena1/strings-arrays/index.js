// --------------- EXERCÍCIOS LEITURA DE CÓDIGO --------------------
// --------------- EXERCÍCIOS 1 --------------------

/*
let array
console.log('a. ', array) // Será impresso o valor da array

array = null
console.log('b. ', array) // Será impresso array null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Será impresso o tamanho da array

let i = 0
console.log('d. ', array[i]) // Será impresso o valor da posução do indice

array[i+1] = 19
console.log('e. ', array) // Será incrementado 1 posição no array até chegar ao 19

const valor = array[i+6]
console.log('f. ', valor) // a variavel valor recebera o valor do array na posição do indice + 6
*/

// --------------- EXERCÍCIOS 2 --------------------

/*
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
// RESPOSTA: SUBI NUM ÔNIBUS EM MIRROCOS  27 (toUpperCase = Deixou a string em Maiucula, replaceAll = trocou as vogais A por I e o length = Contou a quantidade de caracteres da string)
*/

// --------------- EXERCÍCIOS ESCRITA DE CÓDIGO --------------------
            // --------------- EXERCÍCIOS 1 --------------------
/*
let nomeUsuario = prompt ("Qual o seu nome?")
let emailUsuario = prompt ("Qual o seu email?")
console.log ("O email",emailUsuario, "foi cadastrado com sucesso. Seja bem-vinda (o)",nomeUsuario)
*/

            // --------------- EXERCÍCIOS 2 --------------------
/*
const comidasPreferidas = ["marcarrao","cuscuz","chocolate","bolo","empadao"]
console.log (comidasPreferidas)
console.log("Essas são minhas comidas favoritas")
console.log (comidasPreferidas[0])
console.log (comidasPreferidas[1])
console.log (comidasPreferidas[2])
console.log (comidasPreferidas[3])
console.log (comidasPreferidas[4])

const comidaUsuario = prompt("Digite sua comida preferida:")
console.log(comidasPreferidas.replaceAll("couscuz", comidaUsuario))
*/

// --------------- EXERCÍCIOS 3 --------------------

/*
let listaDeTarefas = [null]
listaDeTarefas[0] = prompt("Digite a tarefa 1")
listaDeTarefas[1] = prompt("Digite a tarefa 2")
listaDeTarefas[2] = prompt("Digite a tarefa 3")

console.log(listaDeTarefas)

let i = prompt ("Digite o unemro do indice 0,1 ou 2")
console.log(listaDeTarefas.pop(i))
console.log(listaDeTarefas)
*/

// --------------- DESAFIO --------------------
/*
let frase = prompt("Digite uma frase")
let fraseArray = [frase.split(" ")]
console.log(fraseArray)

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (frutas.indexOf("Abacaxi"))
console.log(frutas.length)

*/