export class EstoquePaes {
    private id:number;
    modalidadeID:number;
    quantidade:number;
    precoVenda:number;

    constructor(modalidadeID:number, quantidade:number, precoVenda:number) {
        this.id = this.generateID();
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
 
    public get getID() : number {
        return this.id;
    }    

    private generateID() : number {
        return Date.now();
    }
}