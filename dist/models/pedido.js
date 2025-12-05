import { Carrinho } from "./carrinho.js";
export class Pedido {
    _carrinho;
    _valor_total;
    constructor(_carrinho, _valor_total = 0) {
        this._carrinho = _carrinho;
        this._valor_total = _valor_total;
    }
    get carrinho() {
        return this._carrinho;
    }
    set carrinho(value) {
        this._carrinho = value;
    }
    get valor_total() {
        return this._valor_total;
    }
    obterValorTotal() {
        this._valor_total = this._carrinho.calcValorTotal() ?? 0;
    }
}
