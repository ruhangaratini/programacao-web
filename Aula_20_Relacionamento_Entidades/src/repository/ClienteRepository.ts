import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente";

export class ClienteRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        await executarComandoSQL(`
            CREATE TABLE IF NOT EXISTS clientes (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255),
                cpf VARCHAR(11),
                data_nascimento DATE
            )
        `, []);
    }

    public async inserir(cliente: Cliente): Promise<Cliente> {
        await executarComandoSQL('INSERT INTO clientes (nome, cpf, data_nascimento) VALUES (?, ?, ?)', [cliente.nome, cliente.cpf, cliente.data_nascimento]);

        return cliente;
    }

    public async buscarPorID(id: number): Promise<Cliente> {
        const response = await executarComandoSQL('SELECT * FROM clientes WHERE id = ?', [id]);

        return new Cliente(response[0].id, response[0].nome, response[0].cpf, new Date(response[0].data_nascimento));
    }

    public async buscarTodos(): Promise<Cliente[]> {
        const response = await executarComandoSQL('SELECT * FROM clientes', []);

        return response;
    }

    public async atualiza(cliente: Cliente): Promise<Cliente> {
        const response = await executarComandoSQL('UPDATE clientes SET nome = ?, cpf = ?, data_nascimento = ? WHERE id = ?',
            [cliente.nome, cliente.cpf, cliente.data_nascimento, cliente.id]);

        if(response.affectedRows == 0)
            throw new Error('Cliente não encontrado');

        return cliente;
    }
}