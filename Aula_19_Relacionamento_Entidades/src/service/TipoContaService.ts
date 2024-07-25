import { TipoConta } from "../model/TipoConta";
import { TipoContaRepository } from "../repository/TipoContaRepository";

export class TipoContaService {
    private repository = new TipoContaRepository();

    async criaTipoConta(data: any): Promise<TipoConta> {
        const tipoConta = new TipoConta(undefined, data.descricao);

        return await this.repository.inserir(tipoConta);
    }

    async atualizaTipoConta(data: any) {
        const tipoConta = new TipoConta(data.id, data.descricao, data.codigoTipoConta);

        return await this.repository.update(tipoConta);
    }

    async deletaTipoConta() {

    }

    async getTipoConta() {

    }

    async getTodasTipoConta() {

    }
}