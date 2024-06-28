import { Request, Response } from "express";
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository";

export class ModalidadePaesController {
    private repository = new ModalidadePaesRepository();

    public listar(req: Request, res: Response) {
        
    }
}