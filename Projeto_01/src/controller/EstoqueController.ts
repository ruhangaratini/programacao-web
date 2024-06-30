import { Request, Response } from "express";
import { listarEstoquePaes } from "../service/estoquePaes/listarEstoque";
import { inserirEstoquePaes } from "../service/estoquePaes/inserirEstoque";
import { EstoquePaes } from "../model/EstoquePaes";
import { buscarEstoquePaes } from "../service/estoquePaes/buscarEstoque";

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

        if(inserirEstoquePaes(new EstoquePaes(modalidadeID, quantidade, precoVenda)))
            res.status(201).json({ message: 'Estoque cadastrado com sucesso!'});
        else
            res.status(400).json({ message: 'Erro ao cadastrar estoque, verifique a modalidade' });
    }

    public atualizar(req:Request, res:Response) : void {
        
    }
}