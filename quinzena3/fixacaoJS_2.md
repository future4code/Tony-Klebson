function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui

  let precoNormal=0
  let precopromocao=0
  
  if(quantidade<12){
  precoNormal = 1.30*quantidade
  return precoNormal
  }
if(quantidade>=12){
precopromocao = 1*quantidade
return precopromocao
}
}