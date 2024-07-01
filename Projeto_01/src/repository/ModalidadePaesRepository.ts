import { ModalidadePaes } from "../model/ModalidadePaes";

export class ModalidadePaesRepository {
    private modalidadePaes: ModalidadePaes[] = [];

    
    public get listar() : ModalidadePaes[] {
        return this.modalidadePaes;
    }

    public buscarID(id:number) : ModalidadePaes|undefined {
        return this.modalidadePaes.find((modalidade) => modalidade.getID == id);
    }

    public buscar(nome:string, vegano:boolean) : ModalidadePaes|undefined {
        return this.modalidadePaes.find((modalidade) => modalidade.nome == nome && modalidade.vegano == vegano);
    }

    public inserir(modalidade:ModalidadePaes) : void {
        this.modalidadePaes.push(modalidade);
    }

    public atualizar(id:number, nome:string, vegano:boolean) : boolean {
        const index:number = this.modalidadePaes.findIndex((modalidade) => modalidade.getID == id);
        
        if(index == -1) return false;

        this.modalidadePaes[index].nome = nome;
        this.modalidadePaes[index].vegano = vegano;

        return true;
    }

    public deletar(id:number, nome:string, vegano:boolean) : boolean {
        const index:number = this.modalidadePaes.findIndex((modalidade) => modalidade.getID == id && modalidade.nome == nome && modalidade.vegano == vegano);

        if(index == -1) return false;

        this.modalidadePaes.splice(index, 1);

        return true;
    }
    
}