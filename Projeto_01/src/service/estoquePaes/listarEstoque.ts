import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function listarEstoquePaes() : EstoquePaes[] {
    const repository = DataBase.estoquePaes;

    return repository.listar;
}