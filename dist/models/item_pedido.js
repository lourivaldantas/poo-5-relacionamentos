import { Produto } from './produto.js';
export class ItemPedido {
    _id;
    _produto;
    _quantidade;
    constructor(_id, _produto, _quantidade) {
        this._id = _id;
        this._produto = _produto;
        this._quantidade = _quantidade;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
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
    aumentarQuantidadeItens() {
        return this._quantidade += 1;
    }
    diminuirQuantidadeItens() {
        if (this._quantidade == 1)
            return this._quantidade;
        return this._quantidade -= 1;
    }
}
