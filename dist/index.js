import { Carrinho } from "./models/carrinho.js";
import { ItemPedido } from "./models/item_pedido.js";
import { Pedido } from "./models/pedido.js";
import { Produto } from "./models/produto.js";
// Produtos
const produto1 = new Produto(1, 45.90, "1984", "Distopia clássica de George Orwell sobre vigilância e totalitarismo.");
const produto2 = new Produto(2, 119.90, "O Senhor dos Anéis", "Épico de fantasia de J. R. R Tolkien sobre a Terra Média.");
const produto3 = new Produto(3, 39.50, "Dom Casmurro", "Romance de Machado de Assis sobre ciúme e memória.");
const produto4 = new Produto(4, 34.90, "O Pequeno Príncipe", "Fábula poética de Atoine de Saint-Exupéry sobre amizade e amor.");
// Itens pedidos
const item_pedido1 = new ItemPedido(111, produto1, 3);
const item_pedido2 = new ItemPedido(112, produto3, 2);
const item_pedido3 = new ItemPedido(113, produto4, 5);
// Carrinho
const carrinho = new Carrinho();
carrinho.adicionarItem(item_pedido1);
carrinho.adicionarItem(item_pedido2);
carrinho.adicionarItem(item_pedido3);
carrinho.aumentarQuantidade(item_pedido2);
carrinho.diminuirQuantidade(item_pedido3);
// Pedido final
const pedido = new Pedido(carrinho);
pedido.obterValorTotal();
console.log({
    itens: pedido.carrinho.itens.map(it => ({
        "Código": it.produto.id,
        "Nome": it.produto.nome,
        "Preço": it.produto.valor.toFixed(2),
        "Descrição": it.produto.descricao,
        "Quantidade": it.quantidade
    })),
    "Valor total:": `R$${pedido.valor_total.toFixed(2)}`
});
