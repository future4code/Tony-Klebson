// EXERCÍCIO DE INTERPRETAÇÃO DE TEXTO

// --------------EXÉRCICIO 1------------------
/*
O código está inicializando a variavel valor com Zero, sendo aplicado um laço de repetição onde o 'i' deverá ser menor que 5 para permanecer no loop
Será impresso o último valor após sair do laço

// --------------EXÉRCICIO 2------------------
a) será impresso os numeros maiores de 18
b) Não, deveria ser iniciada uma variavel contadora


// --------------EXÉRCICIO 3------------------

Será impresso 4 linhas de * (cada linha com a mesma quantidade de *)
*/

// EXERCICIO DE ESCRITA DE CÓDIGO
// --------------EXÉRCICIO 1------------------
/*
let bichoEstimacao = Number (prompt("Quantos bichinhos de estimação você tem?"))
const nomeBichinhos = []
let i=0

while(i=0,i <= bichoEstimacao, i++){
    nomeBichinhos.push[i] = prompt ("Digite o nome do Bichinho")
    console.log(nomeBichinhos[i])
    i++
}

if (bichoEstimacao === 0){
   console.log('Que pena! Você pode adotar um pet!')

} else
console.log("OPS! Alfo deu errado")
  */

   // --------------EXÉRCICIO 2------------------

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
let i=0
let maiorNumero = 0
let menorNumero = Infinity

console.log("// Resposta item a.")
for(i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i])

} 
console.log("// Resposta item b.")

for(i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i]/10)
}
console.log("// Resposta item c.")
for(i = 0; i < arrayOriginal.length; i++) {
    novoArray.push[i] = arrayOriginal[i]%2===0
} 
console.log("// Resposta item d.")
for(i = 0; i < arrayOriginal.length; i++) {
    console.log(`O elemento do index ${i} é o numero ${arrayOriginal[i]}`)
}
console.log("// Resposta e.")
for(i = 0; i < arrayOriginal.length; i++) {
if (arrayOriginal[i]>maiorNumero)
maiorNumero = arrayOriginal[i]
}
console.log(`Este é o maior número da Array original ${maiorNumero}`)
for(i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i]<menorNumero)
    menorNumero = arrayOriginal[i]
}
console.log(`Este é o menor número da Array Original ${menorNumero}`)