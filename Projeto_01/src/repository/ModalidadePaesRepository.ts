import { ModalidadePaes } from "../model/ModalidadePaes";

export class ModalidadePaesRepository {
    private modalidadePaes: ModalidadePaes[] = [];

    
    public get listar() : ModalidadePaes[] {
        return this.modalidadePaes;
    }
    
}