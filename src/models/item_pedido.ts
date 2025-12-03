import { Produto } from './produto.js'

export class ItemPedido {
    constructor(
        private _produto: Produto,
        private _quantidade: number
    ) {}
    
    public get produto(): Produto {
        return this._produto;
    }
    public set produto(value: Produto) {
        this._produto = value;
    }
    
    public get quantidade(): number {
        return this._quantidade;
    }
    public set quantidade(value: number) {
        this._quantidade = value;
    }
}
