function calcular() {
     
    var qtdMacas = Number(id_qtd_macas.value)
    let custo_unidade = 0.75;
    
    if (qtdMacas >= 10)
        custo_unidade = 0.68

    let total_compra =  qtdMacas * custo_unidade


    saida.innerHTML = `Comprando ${qtdMacas} maçãs,<br> o total da compra é R$${total_compra.toFixed(2)}`
        
}