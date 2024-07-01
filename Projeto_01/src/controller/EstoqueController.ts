import { Request, Response } from "express";
import { listarEstoquePaes } from "../service/estoquePaes/listarEstoque";
import { inserirEstoquePaes } from "../service/estoquePaes/inserirEstoque";
import { EstoquePaes } from "../model/EstoquePaes";
import { buscarEstoquePaes } from "../service/estoquePaes/buscarEstoque";
import { adicionarEstoquePaes } from "../service/estoquePaes/adicionarEstoque";
import { removerItensEstoquePaes } from "../service/estoquePaes/removerItensEstoque";

export class EstoqueController {
    public listar(req:Request, res:Response) : void {
        res.status(200).json(listarEstoquePaes());
    }

    public buscar(req:Request, res:Response) : void {
        const estoque = buscarEstoquePaes(parseInt(req.params.id));

        if(estoque instanceof EstoquePaes)
            res.status(200).json(estoque);
        else
            res.status(400).json({ message: 'Estoque não encontrado!' });
    }

    public inserir(req:Request, res:Response) : void {
        const { modalidadeID, quantidade, precoVenda } = req.body;

        if(!modalidadeID || !quantidade || !precoVenda) {
            res.status(400).json({ message: 'Erro ao cadastrar estoque, verifique os parâmetros da requisição'});
            return;
        }

        const response = inserirEstoquePaes(new EstoquePaes(modalidadeID, quantidade, precoVenda));
        if(response instanceof Error)
            res.status(400).json({ message: response.message });
        else
            res.status(201).json({ message: 'Estoque cadastrado com sucesso!'});
    }

    public atualizar(req:Request, res:Response) : void {
        const { id, modalidadeID, quantidade, precoVenda } = req.body;

        if(!id || !modalidadeID || !quantidade || ! precoVenda) {
            res.status(400).json({ message: 'Erro ao atualizar estoque, verifique os parâmetros da requisição'});
            return;
        }

        const response = adicionarEstoquePaes(id, modalidadeID, quantidade, precoVenda);

        if(response instanceof Error)
            res.status(400).json({ message: response.message });
        else
            res.status(200).json({ message: 'Estoque atualizado com sucesso!', estoque: response });
    }

    public removerItens(req:Request, res:Response) : void {
        const { id, modalidadeID, quantidade, precoVenda } = req.body;

        if(!id || !quantidade) {
            res.status(400).json({ message: 'Erro ao remover itens do estoque, verifique os parâmetros da requisição' });
        }

        const response = removerItensEstoquePaes(id, quantidade);

        if(response instanceof Error)
            res.status(400).json({ message: response.message });
        else
            res.status(200).json({ message: 'Estoque atualizado com sucesso!', estoque: response });
    }
}