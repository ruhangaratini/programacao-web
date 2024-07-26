import { Request, Response } from "express";
import { ClienteService } from "../service/ClienteService";

const service = new ClienteService();

export async function criarCliente(req: Request, res: Response) {
    try {
        const novoCliente = service.criarCliente(req.body);
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}