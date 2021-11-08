function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salario = 2000
let comissao = (qtdeCarrosVendidos*100)+valorTotalVendas*0.05;
let pagamento = comissao+salario
return pagamento

}