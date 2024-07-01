import DataBase from "../../model/DataBase";
import { ModalidadePaes } from "../../model/ModalidadePaes";
import { ModalidadePaesRepository } from "../../repository/ModalidadePaesRepository";

export function buscarModalidadePaes(id:number) : ModalidadePaes|undefined {
    const repository:ModalidadePaesRepository = DataBase.modalidadePaes;
    
    return repository.buscarID(id);

}