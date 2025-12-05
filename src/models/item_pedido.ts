import { Produto } from './produto.js'

export class ItemPedido {
    constructor(
        private _id: number,
        private _produto: Produto,
        private _quantidade: number
    ) {}
    
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get produto(): Produto {
        return this._produto;
    }
    public set produto(value: Produto) {
        this._produto = value;
    }
    
    public get quantidade(): number {
        return this._quantidade;
    }
    
    public aumentarQuantidadeItens(): number {
       return this._quantidade += 1
    }
    public diminuirQuantidadeItens(): number {
       if(this._quantidade == 1) return this._quantidade
        return this._quantidade -= 1
    }
}
