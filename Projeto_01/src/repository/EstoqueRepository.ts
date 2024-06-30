import { EstoquePaes } from "../model/EstoquePaes";

export class EstoqueRepository {
    private estoquePaes:EstoquePaes[] = [];
 
    public get listar() : EstoquePaes[] {
        return this.estoquePaes;
    }

    public buscar(id:number) : EstoquePaes|undefined {
        return this.estoquePaes.find((estoque) => estoque.getID == id)
    }

    public inserir(estoquePaes:EstoquePaes) : void {
        this.estoquePaes.push(estoquePaes);
    }

    public atualizar(id:number, quantidade:number) : void {
        const index = this.estoquePaes.findIndex((estoque) => estoque.getID == id);
    }
    
}