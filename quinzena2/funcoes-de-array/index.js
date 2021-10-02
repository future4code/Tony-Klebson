// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// --------------- EXERCÍCIO 1 ----------------------------

// a) Não será impresso nada, pois a função não foi chamada

// --------------- EXERCÍCIO 2 ----------------------------

// a) Será impresso o return (os nomes)

// --------------- EXERCÍCIO 3 ----------------------------

// a) Será impresso as linhas que não contem a string "Chijo", devido ao uso do filter)

// EXERCICIOS DE ESCRITA DE CÓDIGO

// --------------- EXERCÍCIO 1 ----------------------------

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 console.log("Respota a")
 const novoArray = pets.map((item, index, array) => {
    return item.nome
 })
console.log("Respota b")
 const novoArraySalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 console.log("Respota c")
 function buscaPoodles(item) {
     return item.raca=== "poodle"
 }
 const novoArrayDescontoPoodle = pets.filter((item, index, array) => {
    return  `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!` 
    })
 
 console.log(novoArray)
 console.log(novoArraySalsicha)
 console.log(novoArrayDescontoPoodle)

 // --------------- EXERCÍCIO 2 ----------------------------

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novoArrayProdutos = produtos.map((item, index, array) => {
    return item.nome
 })

console.log(novoArrayProdutos)

const novoArrayProdutosDesconto = produtos.map((item, index, array) => {
    return (item.nome, (item.preco*5)/100+item.preco)
})
const novoArrayBebidas = produtos.filter ((item, index, array) => {
    return item.categoria === "Bebidas"
})
const novoArrayYpe = produtos.filter ((item, index, array) => {
       return  item.nome.includes("Ypê") === true


//const novoArrayComprapreco = produtos.filter ((item, index, array) => {
    //return  item.nome.includes("Ypê") === true
  const  novoArrayComprapreco = produtos.map((novoArrayYpe) => {
    return (`compre ${item.nome} por ${item.preco} `)
})
})

console.log(novoArrayProdutosDesconto)
console.log(novoArrayBebidas)
console.log(novoArrayYpe)
console.log(novoArrayComprapreco)
   