import DataBase from "../../model/DataBase";
import { ModalidadePaes } from "../../model/ModalidadePaes";
import { ModalidadePaesRepository } from "../../repository/ModalidadePaesRepository";

export function inserirModalidadePaes(modalidade: ModalidadePaes): boolean {
    const repository: ModalidadePaesRepository = DataBase.modalidadePaes;

    repository.inserir(modalidade);

    return true;
}