import DataBase from "../../model/DataBase";
import { EstoquePaes } from "../../model/EstoquePaes";
import { ItemVenda } from "../../model/ItemVenda";
import { VendaPaes } from "../../model/VendaPaes";

export function registrarVenda(cpf: string, itens: ItemVenda[]): Object|Error {
    const vendasRepository = DataBase.vendaPaes;
    const estoqueRepository = DataBase.estoquePaes;
    const modalidadeRepository = DataBase.modalidadePaes;
    const itensResponse: { estoquePaesID: number, quantidade: number, nome: string }[] = [];
    let valorTotal: number = 0;

    for (const item of itens) {
        const estoque: EstoquePaes|undefined = estoqueRepository.buscar(item.estoquePaesID);

        if (!estoque)
            return new Error(`Estoque ${item.estoquePaesID} não encontrado`);

        if (estoque.quantidade < item.quantidade)
            return new Error(`Estoque ${estoque.getID} insuficiente - saldo: ${estoque.quantidade - item.quantidade}`);

        valorTotal += estoque.precoVenda * item.quantidade;
        itensResponse.push({
            estoquePaesID: item.estoquePaesID,
            quantidade: item.quantidade,
            nome: modalidadeRepository.buscarID(estoque.modalidadeID)?.nome ?? ''
        });
    }

    for (const item of itens) {
        estoqueRepository.removerItens(item.estoquePaesID, item.quantidade);
    }

    const venda = new VendaPaes(cpf, valorTotal, itens);

    vendasRepository.registrarVenda(venda);

    return {
        idVenda: venda.getID,
        cpf: cpf,
        itens: itensResponse,
        valorTotal: valorTotal
    };
}