// Exercício de interpletação de código

//------------------EXERCICIO 1 ----------------

//a) Respostas: Matheus Nachtergaele , Virginia Cavendish, canal: "Globo", horario: "14h"

//------------------EXERCICIO 2 ----------------

// a) cachorro = nome: "Juca", idade: 3, raca: "SRD"
//    gato = nome: "Juca", idade: 3, raca: "SRD", nome:"Juba"
//    tartaruga = nome: "Juca", idade: 3, raca: "SRD", nome:"Juba", nome: "Jubo"

// b) a sintaxe dos ... copia o objeto chamado após os mesmos

//------------------EXERCICIO 3 ----------------

// a) Será impresso algum erro no código
// b) Pois não foi chamada a propriedade do objeto corretamente 


// Exercício de Inscrita de código

//------------------EXERCICIO 1 ----------------
// a)
/*
const pessoa = {
    nome: "Fulano", 
    apelidos: ["Apelido", "Apelidinho", "Apelidão"]

}

    function chamaNome(pessoa) {
        const texto = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]},ou ${pessoa.apelidos[2]}`)
            return texto
    }

    console.log(chamaNome(pessoa))
*/
    // b)
/*
        const nPessoa = {...pessoa.apelidos.push("apelido1", "Apelido 2", "Apelido3")}

    function chamaNome(pessoa) {
        const texto = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[3]}, ${pessoa.apelidos[4]},ou ${pessoa.apelidos[5]}`)
            return texto
    }
    console.log(chamaNome(pessoa))
*/


//------------------EXERCICIO 2 ----------------
/*
const usuario1 = {
    nome: "Fulano", 
    idade: 30,
    profissao: "Programador"
    
}

    function valoresUsuario (usuario1) {

     const retorno = [ usuario1.nome , usuario1.nome.length, usuario1.idade, usuario1.profissao, usuario1.profissao.length]
        return retorno
}

    console.log(valoresUsuario(usuario1))
*/

//------------------EXERCICIO 3 ----------------
/*
const carrinho = [ ]

const frutas1 = {
    nome: "fruta1",
    disponibilidade: true
}

const frutas2 = {
    nome: "fruta2",
    disponibilidade: true
}

const frutas3 = {
    nome: "fruta3",
    disponibilidade: true
}
function nomeFruta(frutas1, frutas2, frutas3) {
         carrinho.push(frutas1,frutas2,frutas3)
    return carrinho
}
    
*/

//------------------DESAFIO ----------------

let nomeDigitado = prompt("Digite seu nome")
let idadeDigitada = Number (prompt("Digite sua idade"))
let profissaoDigitada = prompt ("Digite sua profissão")


function perguntasUsuario (dados) {
   let dadosUsuario = {
        nome: nomeDigitado,
        idade: idadeDigitada,
        profissao: profissaoDigitada
        
        
    }
    

}
console.log(perguntasUsuario(dados))

