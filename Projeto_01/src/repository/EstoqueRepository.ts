import { EstoquePaes } from "../model/EstoquePaes";

export class EstoqueRepository {
    private estoquePaes:EstoquePaes[] = [];
 
    public get listar() : EstoquePaes[] {
        return this.estoquePaes;
    }

    public buscar(id:number) : EstoquePaes|undefined {
        return this.estoquePaes.find((estoque) => estoque.getID == id);
    }

    public buscarModalidade(modalidadeID:number) : EstoquePaes|undefined {
        return this.estoquePaes.find((estoque) => estoque.modalidadeID == modalidadeID);
    }

    public inserir(estoquePaes:EstoquePaes) : void {
        this.estoquePaes.push(estoquePaes);
    }

    public atualizar(id:number, modalidadeID:number, quantidade:number, precoVenda:number) : EstoquePaes|Error {
        const index = this.estoquePaes.findIndex((estoque) => estoque.getID == id && estoque.modalidadeID == modalidadeID);

        if(index == -1)
            return new Error('Estoque não encontrado');

        this.estoquePaes[index].quantidade += quantidade;
        this.estoquePaes[index].precoVenda = precoVenda;

        return this.estoquePaes[index];
    }

    public removerItens(id:number, quantidade:number) : EstoquePaes|Error {
        const index = this.estoquePaes.findIndex((estoque) => estoque.getID == id);

        if(index == -1)
            return new Error('Estoque não encontrado');

        this.estoquePaes[index].quantidade -= quantidade;

        return this.estoquePaes[index];
    }
    
}