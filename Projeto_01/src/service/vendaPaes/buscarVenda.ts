import DataBase from "../../model/DataBase";
import { VendaPaes } from "../../model/VendaPaes";
import { EstoqueRepository } from "../../repository/EstoqueRepository";
import { ModalidadePaesRepository } from "../../repository/ModalidadePaesRepository";
import { VendaRepository } from "../../repository/VendaRepository";

export function buscarVenda(id: number): Object | Error {
    const vendaRepository: VendaRepository = DataBase.vendaPaes;
    const estoqueRepository: EstoqueRepository = DataBase.estoquePaes;
    const modalidadeRepository: ModalidadePaesRepository = DataBase.modalidadePaes;

    const venda = vendaRepository.buscar(id);

    if (!venda)
        return new Error('Venda não encontrada');

    const response = {
        idVenda: venda.getID,
        cpf: venda.cpfCliente,
        itens: new Array,
        total: venda.valorTotal
    }

    for (const item of venda.itensComprados) {
        const estoque = estoqueRepository.buscar(item.estoquePaesID);
        const itemResponse = {
            estoquePaesID: item.estoquePaesID,
            quantidade: item.quantidade,
            nome: '-'
        };

        if(estoque !== undefined) {
            itemResponse.nome = modalidadeRepository.buscarID(estoque.modalidadeID)?.nome ?? '-';
        }

        response.itens.push(itemResponse);

    }

    return response;
}