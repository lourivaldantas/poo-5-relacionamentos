export class Produto {
    constructor(
        private _id: number,
        private _valor: number,
        private _nome: string,
        private _descricao: string
    ) {}
    
    public get id(): number {
    return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }
}
