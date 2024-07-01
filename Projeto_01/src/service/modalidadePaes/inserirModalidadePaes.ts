import DataBase from "../../model/DataBase";
import { ModalidadePaes } from "../../model/ModalidadePaes";
import { ModalidadePaesRepository } from "../../repository/ModalidadePaesRepository";

export function inserirModalidadePaes(modalidade: ModalidadePaes): Error|void {
    const repository: ModalidadePaesRepository = DataBase.modalidadePaes;

    if(repository.buscar(modalidade.nome, modalidade.vegano)) 
        return new Error('Modalidade já cadastrada');

    repository.inserir(modalidade);
}