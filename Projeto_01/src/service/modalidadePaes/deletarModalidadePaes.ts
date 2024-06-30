import DataBase from "../../model/DataBase";
import { ModalidadePaesRepository } from "../../repository/ModalidadePaesRepository";

export function deletarModalidadePaes(id: number, nome: string, vegano: boolean): boolean {
    const repository: ModalidadePaesRepository = DataBase.modalidadePaes;

    return repository.deletar(id, nome, vegano);
}