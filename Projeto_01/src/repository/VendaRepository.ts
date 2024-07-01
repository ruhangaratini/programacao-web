import { VendaPaes } from "../model/VendaPaes";

export class VendaRepository {
    private vendaPaes:VendaPaes[] = [];

    public buscar(id:number) : VendaPaes|undefined {
        return this.vendaPaes.find((venda) => venda.getID == id);
    }

    public registrarVenda(venda:VendaPaes) : void {
        this.vendaPaes.push(venda);
    }

}