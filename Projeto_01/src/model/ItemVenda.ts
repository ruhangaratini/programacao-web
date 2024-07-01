export class ItemVenda {
    estoquePaesID:number;
    quantidade:number;

    constructor(estoquePaesID:number, quantidade:number) {
        this.estoquePaesID = estoquePaesID;
        this.quantidade = quantidade;
    }

    static fromJSON(data:any) : ItemVenda|Error {
        if(typeof data.estoquePaesID != 'number' || typeof data.quantidade != 'number')
            return new Error('Item de venda inválido');

        return new ItemVenda(data.estoquePaesID, data.quantidade);
    }
}