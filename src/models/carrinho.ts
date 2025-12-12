import { ItemPedido } from "./item_pedido.js";

export class Carrinho {
    constructor(
        private _itens: ItemPedido[] = [],
    ) {}

    get itens(): ItemPedido[] {
        return this._itens
    }

    adicionarItem(novoItem: ItemPedido): boolean {
        const existe = this._itens.some(item => item.id === novoItem.id)
        if (!existe) {
            this._itens.push(novoItem)
            return true    
        } else return false
    }
    
    aumentarQuantidade(it: ItemPedido) {
        const item = this.buscarItem(it)
        if(item) {
            item.aumentarQuantidadeItens()
        }
    }
 
    diminuirQuantidade(it: ItemPedido) {
        const item = this.buscarItem(it)
        if(item) {
            item.diminuirQuantidadeItens()
        }
    }

    buscarItem(itemBuscado: ItemPedido): ItemPedido | undefined {
        return this._itens.find(it => it.id === itemBuscado.id)
    }

    removerItem(id: number) {
        this._itens = this._itens.filter(item => item.id !== id)
    }

    calcValorTotal(): number | undefined {
        if(this._itens.some(r => r.quantidade < 1)) return undefined
        const total = this._itens.reduce((acc, n) => acc + n.produto.valor * n.quantidade, 0)
        return parseFloat(total.toFixed(2))
    }
}
