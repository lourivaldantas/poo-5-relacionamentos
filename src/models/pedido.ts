import { Carrinho } from "./carrinho.js";

export class Pedido {
    constructor(
        private _carrinho: Carrinho,
        private _valor_total: number = 0
    ) {}

    public get carrinho(): Carrinho {
        return this._carrinho;
    }
    public set carrinho(value: Carrinho) {
        this._carrinho = value;
    }

    get valor_total() {
        return this._valor_total
    }

    obterValorTotal() {
        this._valor_total = this._carrinho.calcValorTotal() ?? 0
    }
}
