export class Produto {
    constructor(
        private _codigo: number,
        private _valor: number,
        private _descricao: string
    ) {}
    
    public get codigo(): number {
    return this._codigo;
    }
    public set codigo(value: number) {
        this._codigo = value;
    }

    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
    
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }
}
