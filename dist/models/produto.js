export class Produto {
    _codigo;
    _valor;
    _descricao;
    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
    constructor(_codigo, _valor, _descricao) {
        this._codigo = _codigo;
        this._valor = _valor;
        this._descricao = _descricao;
    }
}
