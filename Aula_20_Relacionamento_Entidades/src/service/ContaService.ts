import { Cliente } from "../model/Cliente";
import { Conta } from "../model/Conta";
import { TipoConta } from "../model/TipoConta";
import { ClienteRepository } from "../repository/ClienteRepository";
import { ContaRepository } from "../repository/ContaRepository";
import { TipoContaRepository } from "../repository/TipoContaRepository";
import { daysDiff } from "../utils/DaysDiffUtils";

export class ContaService {
    private clienteRepository = new ClienteRepository();
    private tipoContaRepository = new TipoContaRepository();
    private repository = new ContaRepository();

    async criaConta(data: any) {
        const cliente : Cliente = await this.clienteRepository.buscarPorCPF(data.cpf); 
        const conta : Conta = new Conta(undefined, cliente.id, undefined, data.saldo, data.tipoConta);
        const tipoConta : TipoConta = await this.tipoContaRepository.buscarPorCodigo(conta.tipoConta);

        if(!tipoConta) {
            throw new Error(`Tipo de conta ${conta.tipoConta} não encontrado`);
        }

        if(daysDiff(new Date(), cliente.data_nascimento!) < 18 * 365 && tipoConta.descricao == 'Corrente') {
            throw new Error('Cliente menor de 18 anos');
        }

        if(tipoConta.descricao == 'Poupança' && conta.saldo < 100) {
            throw new Error('Saldo insuficiente, mínimo: R$100,00');
        }

        const clienteContas = await this.repository.buscarPorCliente(cliente.id);

        console.log(cliente);
        console.log(tipoConta);
        console.log(clienteContas);

        for(const clienteConta of clienteContas) {
            if(clienteConta.codigo_tipo_conta == tipoConta.codigoTipoConta) {
                throw new Error(`Cliente já possui uma conta ${tipoConta.descricao}`);
            }
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