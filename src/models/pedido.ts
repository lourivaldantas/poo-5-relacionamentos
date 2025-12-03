import { ItemPedido } from './item_pedido.js'

export class Pedido {
    constructor(
        private _itens: ItemPedido[] = [],
        private _valor_total: number = 0
    ) {}

    public get itens(): ItemPedido[] {
        return this._itens;
    }
    public addItens(ip: ItemPedido) {
        this._itens.push(ip)
    }

    public get valor_total(): number {
        return this._valor_total!;
    }
    public calcValorTotal(): boolean {
        let valorTotal: number = 0
        for (let i of this._itens) {
            const valor:number = i.produto.valor
            const qntd: number = i.quantidade
            valorTotal += valor * qntd
        }
        if(valorTotal == 0) {
            return false
        }
        this._valor_total = valorTotal
        return true
    }
}
