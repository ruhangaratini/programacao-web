import { ItemVenda } from "./ItemVenda";

export class VendaPaes {
    private id:number;
    cpfCliente:string;
    valorTotal:number;
    itensComprados: ItemVenda[];

    constructor(cpfCliente:string, valorTotal:number, itensComprados:Array<ItemVenda>) {
        this.id = this.generateId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    
    public get getID() : number {
        return this.id;
    }

    private generateId() : number {
        return Date.now();
    }
}