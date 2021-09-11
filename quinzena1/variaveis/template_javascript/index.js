//a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade 

 //c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof. 
console.log (typeof [nome])
console.log (typeof[idade])

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//Resp: Foi impresso o tipo object, pois a variavel não tem nenhum valor.

//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt ("Qual o seu nome?")
idade = prompt ("Qual sua idade?")

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log (nome,idade)

//g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
    console.log ('olá',nome,'você tem',idade, 'anos')

//2 - Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

//a) Crie três novas variáveis, contendo as respostas

let statusEstudante = prompt ("Você estuda? Digite Sim / Não")
let statusNacionalidade= prompt ("Você é brasileiro? Digite Sim / Não")
let statusTrabalhador= prompt ("Você trabalha? Digite Sim / Não")

let statusEstudanteM = Boolean (statusEstudante) //modificado
let statusNacionalidadeM = Boolean (statusNacionalidade) //modificado
let statusTrabalhadorM = Boolean (statusTrabalhador) //modificado

    console.log ("Você estuda - ", statusEstudanteM)
    console.log ("Você é brasileiro - ", statusNacionalidadeM)
    console.log ("Você trabalha - ", statusTrabalhadorM)
    

//3 - 

let a = 10
let b = 25
let c = null
c = a 
a = b 
b = c 

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO

//1 - Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
let numero1  =  prompt ("Digite um Número:" ) 
let numero2 =  prompt ("Digite outro número:") 
let numero3 = Number (numero1) // conversão para numero
let numero4 = Number (numero2) // conversão para numero
let x 
let y 

x = (numero3+numero4) 
y = numero3*numero4

console.log ("o Resultado da adição dos dois números é", x)
console.log ("o Resultado da multiplicação dos dois números é", y)
