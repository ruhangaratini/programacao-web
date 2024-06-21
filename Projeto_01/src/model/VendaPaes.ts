import { ItemVenda } from "./ItemVenda";

export class VendaPaes {
    ID:number;
    cpfCliente:string;
    valorTotal:string;
    itensComprados: ItemVenda[];

    constructor(cpfCliente:string, valorTotal:string, itensComprados:Array<ItemVenda>) {
        this.ID = this.generateId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }

    private generateId() : number {
        return Date.now();
    }
}