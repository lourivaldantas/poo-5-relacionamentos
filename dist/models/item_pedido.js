import { Produto } from './produto.js';
export class ItemPedido {
    _produto;
    _quantidade;
    constructor(_produto, _quantidade) {
        this._produto = _produto;
        this._quantidade = _quantidade;
    }
    get produto() {
        return this._produto;
    }
    set produto(value) {
        this._produto = value;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(value) {
        this._quantidade = value;
    }
}
