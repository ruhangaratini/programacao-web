import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function inserirEstoquePaes(estoquePaes: EstoquePaes) : boolean {
    const estoqueRepository = DataBase.estoquePaes;
    const modalidadeRepository = DataBase.modalidadePaes;

    if(modalidadeRepository.buscar(estoquePaes.modalidadeID) !== undefined) {
        estoqueRepository.inserir(estoquePaes);
        return true;
    }

    return false;
}