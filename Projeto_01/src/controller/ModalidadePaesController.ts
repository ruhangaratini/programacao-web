import { Request, Response } from "express";
import { ModalidadePaes } from "../model/ModalidadePaes";
import { listarModalidadePaes } from "../service/modalidadePaes/listarModalidadePaes";
import { inserirModalidadePaes } from "../service/modalidadePaes/inserirModalidadePaes";
import { atualizarModalidadePaes } from "../service/modalidadePaes/atualizarModalidadePaes";
import { deletarModalidadePaes } from "../service/modalidadePaes/deletarModalidadePaes";
import { buscarModalidadePaes } from "../service/modalidadePaes/buscarModalidePaes";

export class ModalidadePaesController {

    public listar(req:Request, res:Response) : void {
        res.status(200).json(listarModalidadePaes());
    }

    public buscar(req:Request, res:Response) : void {
        const modalidade = buscarModalidadePaes(parseInt(req.params.id));

        if(modalidade instanceof ModalidadePaes)
            res.status(200).json(modalidade);
        else
            res.status(400).json({ message: 'Modalidade não encontrada' });
    }

    public inserir(req:Request, res:Response) : void {
        const {nome, vegano} = req.body;

        if(!nome || typeof vegano != 'boolean') {
            res.status(400).json({ message: 'Erro ao cadastrar modalidade, verifique os parâmetros da requisição'});
            return;
        }

        const response = inserirModalidadePaes(new ModalidadePaes(nome, vegano));

        if(response instanceof Error)
            res.status(400).json({ message: response.message });
        else
            res.status(201).json({ message: 'Modalidade cadastrada com sucesso!'});
    }

    public atualizar(req:Request, res:Response) : void {
        const {id, nome, vegano} = req.body;

        if(!id || !nome || typeof vegano != 'boolean') {
            res.status(400).json({ message: 'Erro ao atualizar modalidade, verifique os parâmetros da requisição'});
            return;
        }

        if(atualizarModalidadePaes(id, nome, vegano))
            res.status(200).json({ message: 'Modalidade atualizada com sucesso!'});
        else
            res.status(400).json({ message: 'Modalidade não encontrada'});
    }

    public deletar(req:Request, res:Response) : void {
        const {id, nome, vegano} = req.body;

        if(!id || !nome || typeof vegano != 'boolean') {
            res.status(400).json({ message: 'Erro ao deletar modalidade, verifique os parâmetros da requisição'});
            return;
        }

        if(deletarModalidadePaes(id, nome, vegano))
            res.status(202).json({ message: 'Modalidade deletada com sucesso!'});
        else
            res.status(400).json({ message: 'Modalidade não encontrada'});
    }

}