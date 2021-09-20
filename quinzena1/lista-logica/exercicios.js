// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

   console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number (prompt('Digite a altura'))
  const largura = Number (prompt('Digite a largura'))
  const retangulo = altura*largura
    console.log(retangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number (prompt('Digite o ano atual'))
  const anoNascimento= Number (prompt('Digite o ano de nascimento'))
  const idade = anoAtual - anoNascimento
    console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  const peso = Number (prompt('Digite o seu peso em Kg'))
  const altura= Number (prompt('Digite a sua altura em metros'))
  const imc = peso / (altura*altura)
    console.log(imc)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5

function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cores = [cor1,cor2,cor3]
 const cor1 = prompt ("Digite 1º cor")
 const cor2 = prompt ("Digite 2º cor")
 const cor3 = prompt ("Digite 3º cor")
 
  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const mensagemUsuario = prompt('Digite sua mensagem')
  const novaMensagem = mensagemUsuario
  console.log(novaMensagem.toUpperCase())
   
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = Number (prompt('Digite o custo do espetáculo'))
  const valorIngresso= Number (prompt('Digite o valor do ingresso'))
  const ingressosVendidos = custoEspetaculo / valorIngresso
   console.log(ingressosVendidos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite uma string')
  const string2 = prompt('Digite mais uma string')
  const comparacaoString = string1.length === string2.length
    console.log(comparacaoString)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string3 = prompt('Digite uma string')
  const string4 = prompt('Digite mais uma string')
  const comparacaoString = string1.toLowercase === string2.toLowercase
    console.log (comparacaoString)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number (prompt('Digite o ano atual'))
  const anoNascimento= Number (prompt('Digite o ano de nascimento'))
  const emissaoIdentidade= Number (prompt('Digite o ano de Emissão da identidade'))
  const idade = anoAtual - anoNascimento
  const tempoIdentidade = anoAtual - emissaoIdentidade


  const resultado = (idade <=20 && tempoIdentidade >= 5) || ((idade > 20 && idade <= 50) && tempoIdentidade >= 10 ) || (idade > 50 && tempoIdentidade >= 15)
  console.log(resultado)
  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano = Number (prompt('Digite um ano'))
  let anoBissexto1 = ano % 400 === 0 
  let anoBissexto2 = (ano % 4 ===0 && ano % 100 ===0 && ano % 400 === 0)
  let anoBissexto3 = (ano % 4 ===0 && ano % 100 !==0)
  
  

let bissexto = anoBissexto1 || anoBissexto2 || anoBissexto3
console.log(bissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const maiorIdade = prompt('Você possui ensino médio completo? Sim ou Não')
  const ensinoMedio = prompt('Você possui ensino médio completo? Sim ou Não')
  const disponibilidadeExclusiva = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não')
  const inscricaoValida = (maiorIdade === ensinoMedio) && (maiorIdade === disponibilidadeExclusiva) && (ensinoMedio === disponibilidadeExclusiva) && (maiorIdade !== "nao")
  console.log(inscricaoValida)
}