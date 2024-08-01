import { TipoConta } from "../model/TipoConta";
import { ContaRepository } from "../repository/ContaRepository";
import { TipoContaRepository } from "../repository/TipoContaRepository";

export class TipoContaService {
    private repository = TipoContaRepository.getInstance();
    private contasRepository = ContaRepository.getInstance();

    async criaTipoConta(data: any): Promise<TipoConta> {
        const tipoConta = new TipoConta(undefined, data.descricao);

        if (await this.repository.descricaoExistente(tipoConta.descricao)) {
            throw new Error(`A descrição ${tipoConta.descricao} já existe no sistema`);
        }

        return await this.repository.inserir(tipoConta);
    }

    async atualizaTipoConta(data: any): Promise<TipoConta> {
        const novoTipoConta = new TipoConta(data.id, data.descricao, data.codigoTipoConta);
        const tipoConta = await this.repository.buscarPorID(novoTipoConta.id);

        this.repository.atualizar(novoTipoConta);
        await this.contasRepository.atualizaTipoConta(novoTipoConta.codigoTipoConta, tipoConta.codigoTipoConta);

        return novoTipoConta;
    }

    async deletaTipoConta(data: any) {
        const tipoConta = new TipoConta(data.id, data.descricao, data.codigoTipoConta);

        if (await this.contasRepository.verificarCodigoTipoConta(tipoConta.codigoTipoConta)) {
            throw new Error(`Existem contas utilizando esse tipo conta no sistema`);
        }

        return await this.repository.deletar(tipoConta);
    }

    async getTipoConta(id: any, descricao: any, codigoTipoConta: any) {
        let condicao = '';
        const valores = [];

        if (id) {
            condicao += 'id = ? AND ';
            valores.push(id);
        }
        if (descricao) {
            condicao += 'descricao = ? AND ';
            valores.push(descricao);
        }
        if (codigoTipoConta) {
            condicao += 'codigo_tipo_conta = ? AND ';
            valores.push(codigoTipoConta);
        }

        condicao = condicao.slice(0, -4);

        return await this.repository.buscar(condicao, valores);
    }

    async getTiposConta() {
        return await this.repository.buscarTodos();
    }
}