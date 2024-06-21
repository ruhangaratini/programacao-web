export class ModalidadePaes {
    ID:number;
    nome:string;
    vegano:boolean;

    constructor(nome:string, vegano:boolean) {
        this.ID = this.generateId();
        this.nome = nome;
        this.vegano = vegano;
    }

    private generateId() : number {
        return Date.now();
    }
}