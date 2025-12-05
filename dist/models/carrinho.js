import { ItemPedido } from "./item_pedido.js";
export class Carrinho {
    _itens;
    constructor(_itens = []) {
        this._itens = _itens;
    }
    get itens() {
        return this._itens;
    }
    adicionarItem(novoItem) {
        const existe = this._itens.some(item => item.id === novoItem.id);
        if (!existe) {
            this._itens.push(novoItem);
            return true;
        }
        else
            return false;
    }
    aumentarQuantidade(it) {
        const item = this.buscarItem(it);
        if (item) {
            item.aumentarQuantidadeItens();
        }
    }
    diminuirQuantidade(it) {
        const item = this.buscarItem(it);
        if (item) {
            item.diminuirQuantidadeItens();
        }
    }
    buscarItem(itemBuscado) {
        return this._itens.find(it => it.id === itemBuscado.id);
    }
    removerItem(id) {
        this._itens = this._itens.filter(item => item.id !== id);
    }
    calcValorTotal() {
        let total = 0;
        for (let i of this._itens) {
            if (i.quantidade < 1)
                return undefined;
            total += i.produto.valor * i.quantidade;
        }
        return parseFloat(total.toFixed(2));
    }
}
