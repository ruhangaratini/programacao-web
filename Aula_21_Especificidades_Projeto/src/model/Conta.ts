export class Conta{
    id: number;
    idCliente: number;
    numeroConta: string;
    saldo: number;
    tipoConta: number;

    constructor(id?:number, idCliente?:number, numeroConta?:string, saldo?:number,tipoConta?:number){
        this.id = id || 0;
        this.idCliente = idCliente || 0;
        this.saldo = saldo || 0;
        this.numeroConta = numeroConta || this.geraNumeroConta();
        this.tipoConta = tipoConta || 0;
    }

    private geraNumeroConta():string{
        return "C" + Date.now();
    }
}