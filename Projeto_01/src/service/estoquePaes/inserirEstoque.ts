import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function inserirEstoquePaes(estoquePaes: EstoquePaes) : Error|void {
    const estoqueRepository = DataBase.estoquePaes;
    const modalidadeRepository = DataBase.modalidadePaes;

    if(modalidadeRepository.buscarID(estoquePaes.modalidadeID) === undefined)
        return new Error('Modalidade não encontrada');

    estoqueRepository.inserir(estoquePaes);
}