const calcularTotal = (ferramentas, comprar) => {
    
    // Pergunta se a lista de objetos 'ferramentas' OU a lista de strings 'comprar' é(são) vazia(s)
    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let totalPagar = 0;
    let achouFerramenta = false;

    // Percorre cada ferramenta
    for (let i = 0; i < ferramentas.length; i++) {
        const ferramenta = ferramentas[i];

        // Verifica se cada uma das ferramentas está na lista de compras
        for (let j = 0; j < comprar.length; j++) {
            if (ferramenta.nome === comprar[j]) {
                // Se estiver, adiciona o preço ao total
                totalPagar += ferramenta.preco;
                achouFerramenta = true;
            }
        }
    }

    // Se nenhuma ferramenta desejada foi encontrada, lança uma exceção
    if (achouFerramenta === false) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    // Retorna o valor total da compra
    return `O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${totalPagar.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}