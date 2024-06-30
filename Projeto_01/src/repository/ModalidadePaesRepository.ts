import { ModalidadePaes } from "../model/ModalidadePaes";

export class ModalidadePaesRepository {
    private modalidadePaes: ModalidadePaes[] = [];

    
    public get listar() : ModalidadePaes[] {
        return this.modalidadePaes;
    }

    public buscar(id:number) : ModalidadePaes|undefined {
        return this.modalidadePaes.find((modalidade) => modalidade.getID == id);
    }

    public inserir(modalidade:ModalidadePaes) : void {
        this.modalidadePaes.push(modalidade);
    }

    public atualizar(id:number, nome:string, vegano:boolean) : boolean {
        const index:number = this.modalidadePaes.findIndex((modalidade) => modalidade.getID == id);
        console.log(id, index);
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