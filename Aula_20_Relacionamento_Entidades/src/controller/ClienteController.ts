import { Request, Response } from "express";
import { ClienteService } from "../service/ClienteService";

const service = new ClienteService();

export async function cadastrarCliente(req: Request, res: Response) {
    try {
        const novoCliente = await service.criarCliente(req.body);

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso',
            cliente: novoCliente
        });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export async function updateCliente(req: Request, res: Response) {
    try {
        const novoCliente = await service.criarCliente(req.body);

        res.status(201).json({
            mensagem: 'Cliente atualizado com sucesso',
            cliente: novoCliente
        });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export async function deletaCliente(req: Request, res: Response) {
    try {
        // const novoCliente = await service.criarCliente(req.body);

        // res.status(201).json({
        //     mensagem: 'Cliente atualizado com sucesso',
        //     cliente: novoCliente
        // });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}


export async function getCliente(req: Request, res: Response) {
    try {
        const cliente = await service.buscarCliente(req.query.id);
        res.status(200).json(
            {
                cliente: cliente
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export async function getClientes(req: Request, res: Response) {
    try {
        const cliente = await service.buscarClientes();
        res.status(200).json(
            {
                clientes: cliente
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}