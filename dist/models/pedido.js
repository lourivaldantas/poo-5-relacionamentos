import { ItemPedido } from './item_pedido.js';
export class Pedido {
    _itens;
    _valor_total;
    constructor(_itens = [], _valor_total = 0) {
        this._itens = _itens;
        this._valor_total = _valor_total;
    }
    get itens() {
        return this._itens;
    }
    addItens(ip) {
        this._itens.push(ip);
    }
    get valor_total() {
        return this._valor_total;
    }
    calcValorTotal() {
        let valorTotal = 0;
        for (let i of this._itens) {
            const valor = i.produto.valor;
            const qntd = i.quantidade;
            valorTotal += valor * qntd;
        }
        if (valorTotal == 0) {
            return false;
        }
        this._valor_total = valorTotal;
        return true;
    }
}
