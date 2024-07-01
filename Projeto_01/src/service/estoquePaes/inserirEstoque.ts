import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";

export function inserirEstoquePaes(estoquePaes: EstoquePaes) : Error|void {
    const estoqueRepository = DataBase.estoquePaes;
    const modalidadeRepository = DataBase.modalidadePaes;

    if(modalidadeRepository.buscarID(estoquePaes.modalidadeID) === undefined)
        return new Error('Modalidade não encontrada');

    if(estoqueRepository.buscarModalidade(estoquePaes.modalidadeID) !== undefined)
        return new Error('Estoque da modalidade já cadastrado');

    estoqueRepository.inserir(estoquePaes);
}