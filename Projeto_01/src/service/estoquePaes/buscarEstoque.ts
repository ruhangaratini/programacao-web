import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function buscarEstoquePaes(id:number) : EstoquePaes|undefined {
    const repository = DataBase.estoquePaes;

    return repository.buscar(id);
}