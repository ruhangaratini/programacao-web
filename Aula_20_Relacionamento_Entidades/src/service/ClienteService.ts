import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";
import { ContaRepository } from "../repository/ContaRepository";

export class ClienteService {
    private repository = new ClienteRepository();
    private contaRepository = new ContaRepository();

    public async criarCliente(data: any) : Promise<Cliente> {
        const cliente: Cliente = new Cliente(undefined, data.nome, data.cpf, new Date(data.data_nascimento));

        return await this.repository.inserir(cliente);
    } 

    public async atualizaCliente(data: any) : Promise<Cliente> {
        const cliente: Cliente = new Cliente(data.id, data.nome, data.cpf, new Date(data.data_nascimento));

        return await this.repository.atualiza(cliente);
    }

    public async deletaCliente(data: any) : Promise<Cliente> {
        const cliente: Cliente = new Cliente(data.id, data.nome, data.cpf, new Date(data.data_nascimento));

        const qtdContas = (await this.contaRepository.buscarPorCliente(cliente.id)).length;

        if(qtdContas > 0) {
            throw new Error(`Não é possível deletar cliente pois há ${qtdContas} em seu nome`);
        }

        return await this.repository.deleta(cliente);
    }

    public async buscarCliente(id: any) : Promise<Cliente> {
        return await this.repository.buscarPorID(parseInt(id, 10));
    }

    public async buscarClientes() : Promise<Cliente[]> {
        return await this.repository.buscarTodos();
    }

}