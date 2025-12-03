import { ItemPedido } from "./models/item_pedido.js";
import { Pedido } from "./models/pedido.js";
import { Produto } from "./models/produto.js";

const produto1: Produto = new Produto(
    112233,
    55,
    "Cachorro-quente gourmet"
)

const produto2: Produto = new Produto(
    223344,
    12.20,
    "Cuscuz nordestino"
)

const produto3: Produto = new Produto(
    334455,
    23.5,
    "Coca-cola retornável 1L"
)

const itemPedido1: ItemPedido = new ItemPedido(
    produto1,
    3
)

const itemPedido2: ItemPedido = new ItemPedido(
    produto2,
    4
)

const itemPedido3: ItemPedido = new ItemPedido(
    produto3,
    7
)

const pedido1: Pedido = new Pedido(
    []
)
pedido1.addItens(itemPedido1)
pedido1.addItens(itemPedido2)
pedido1.addItens(itemPedido3)
pedido1.calcValorTotal()

console.log(pedido1)