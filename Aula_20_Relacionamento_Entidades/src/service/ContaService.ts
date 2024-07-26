import { Conta } from "../model/Conta";
import { TipoConta } from "../model/TipoConta";
import { ClienteRepository } from "../repository/ClienteRepository";
import { ContaRepository } from "../repository/ContaRepository";
import { TipoContaRepository } from "../repository/TipoContaRepository";

export class ContaService {
    private clienteRepository = new ClienteRepository();
    private tipoContaRepository = new TipoContaRepository();
    private repository = new ContaRepository();

    async criaConta(data: any) {
        const conta = new Conta(undefined, undefined, undefined, data.saldo, data.tipoConta);

        if(!(await this.tipoContaRepository.codigoExistente(conta.tipoConta))) {
            throw new Error(`Tipo de conta ${conta.tipoConta} não encontrado`);
        }

        if(!(await this.clienteRepository.buscarPorID(conta.idCliente))) {
            throw new Error(`Cliente ${conta.idCliente} não encontrado`);
        }

        return await this.repository.inserir(conta);
    }

    async atualizaConta(data:any) {
        const conta = new Conta(data.id, data.idCliente, data.numeroConta, data.saldo, data.tipoConta); 

        return await this.repository.atualiza(conta);
    }

    async deletaConta(data:any) {
        const conta = new Conta(data.id, data.idCliente, data.numeroConta, data.saldo, data.tipoConta); 

        return await this.repository.deleta(conta);
    }

    async getConta(id: any, numeroConta: any, tipoConta: any) {
        let condicao = '';
        const valores = [];

        if(id) {
            condicao += 'id = ? AND ';
            valores.push(id);
        }
        if(numeroConta) {
            condicao += 'numero_conta = ? AND ';
            valores.push(numeroConta);
        }
        if(tipoConta) {
            condicao += 'tipo_conta = ? AND ';
            valores.push(tipoConta);
        }

        condicao = condicao.slice(0, -4);

        return await this.repository.buscar(condicao, valores);
    }

    async getTodasConta() {
        return await this.repository.buscarTodas();
    }

}