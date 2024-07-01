import { Request, Response } from "express";
import { registrarVenda } from "../service/vendaPaes/registrarVenda";
import { ItemVenda } from "../model/ItemVenda";
import { buscarVenda } from "../service/vendaPaes/buscarVenda";

export class VendaController {

    public buscar(req: Request, res: Response): void {
        const response = buscarVenda(parseInt(req.params.id));

        if(response instanceof Error)
            res.status(400).json({ message: response.message });
        else
            res.status(200).json(response);
    }

    public registrar(req: Request, res: Response): void {
        const { cpf, itens } = req.body;
        const itensVendas: ItemVenda[] = [];

        if (!cpf || !itens) {
            res.status(400).json({ message: 'Erro ao registrar venda, verifique os parâmetros da requisição' });
            return;
        }

        for (const item of itens) {
            const itemVenda: ItemVenda | Error = ItemVenda.fromJSON(item);

            if (itemVenda instanceof Error) {
                res.status(400).json({ message: itemVenda.message });
                return;
            }

            itensVendas.push(itemVenda);
        }

        const response = registrarVenda(cpf, itensVendas);

        if (response instanceof Error)
            res.status(400).json({ message: response.message });
        else
            res.status(201).json(response);
    }

}