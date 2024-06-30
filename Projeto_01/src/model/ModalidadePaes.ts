export class ModalidadePaes {
    private id:number;
    nome:string;
    vegano:boolean;

    constructor(nome:string, vegano:boolean) {
        this.id = this.generateID();
        this.nome = nome;
        this.vegano = vegano;
    }

    public get getID() : number {
        return this.id;
    }

    private generateID() : number {
        return Date.now();
    }
}