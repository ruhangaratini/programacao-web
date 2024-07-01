import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function removerItensEstoquePaes(id:number, quantidade:number) : EstoquePaes|Error {
    const repository = DataBase.estoquePaes;

    return repository.removerItens(id, quantidade);
}