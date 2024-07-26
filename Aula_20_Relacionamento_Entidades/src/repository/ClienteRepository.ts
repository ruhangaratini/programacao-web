import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente";

export class ClienteRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        await executarComandoSQL(`
            CREATE TABLE clientes (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255),
                cpf VARCHAR(11),
                data_nascimento DATE
            )
        `, []);
    }

    public async inserir(cliente: Cliente) : Promise<Cliente> {
        await executarComandoSQL('INSERT INTO clientes (nome, cpf, data_nascimento) VALUES (?, ?, ?)', [cliente.nome, cliente.cpf, cliente.data_nascimento]);

        return cliente;
    }

    public async buscarPorID(id: number): Promise<Cliente> {
        const response = await executarComandoSQL('SELECT * FROM clientes WHERE id = ?', [id]);
        
        return new Cliente(response.id, response.nome, response.cpf, response.data_nascimento);
    }
}