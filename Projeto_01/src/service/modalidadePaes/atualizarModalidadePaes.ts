import DataBase from "../../model/DataBase";
import { ModalidadePaesRepository } from "../../repository/ModalidadePaesRepository";

export function atualizarModalidadePaes(id: number, nome: string, vegano: boolean) : boolean {
    const repository: ModalidadePaesRepository = DataBase.modalidadePaes;

    return repository.atualizar(id, nome, vegano);

}