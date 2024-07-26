import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteService {
    private repository = new ClienteRepository();

    public async criarCliente(data: any) : Promise<Cliente> {
        const cliente: Cliente = new Cliente(undefined, data.nome, data.cpf, new Date(data.data_nascimento));

        return await this.repository.inserir(cliente);
    } 
}