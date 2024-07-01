import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function adicionarEstoquePaes(id:number, modalidadeID:number, quantidade:number, precoVenda:number) : EstoquePaes|Error {
    const repository = DataBase.estoquePaes;

    return repository.atualizar(id, modalidadeID, quantidade, precoVenda);
}