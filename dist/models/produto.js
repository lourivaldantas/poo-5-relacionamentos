export class Produto {
    _id;
    _valor;
    _nome;
    _descricao;
    constructor(_id, _valor, _nome, _descricao) {
        this._id = _id;
        this._valor = _valor;
        this._nome = _nome;
        this._descricao = _descricao;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
}
