import DataBase from "../../model/DataBase";

export function listarModalidadePaes() {
    const repository = DataBase.modalidadePaes;

    return repository.listar;
}