export class EstoquePaes {
    ID:number;
    modalidadeID:number;
    quantidade:number;
    precoVenda:number;

    constructor(modalidadeID:number, quantidade:number, precoVenda:number) {
        this.ID = this.generateId();
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }

    private generateId() : number {
        return Date.now();
    }
}