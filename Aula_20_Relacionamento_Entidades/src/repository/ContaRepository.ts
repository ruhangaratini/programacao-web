import { executarComandoSQL } from "../database/mysql";
import { Conta } from "../model/Conta";

export class ContaRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        await executarComandoSQL(`
            CREATE TABLE IF NOT EXISTS contas (
                id INT AUTO_INCREMENT PRIMARY KEY,
                id_cliente INT NOT NULL,
                numero_conta VARCHAR (20),
                saldo DECIMAL (10, 2),
                codigo_tipo_conta VARCHAR (50),
                FOREIGN KEY (id_cliente) REFERENCES clientes (id),
                FOREIGN KEY (codigo_tipo_conta) REFERENCES tipos_conta (codigo_tipo_conta)
                ON UPDATE CASCADE
            )`, []);
    }

    async verificarCodigoTipoConta(codigoTipoConta: number): Promise<boolean> {
        const response = await executarComandoSQL(`SELECT id FROM contas WHERE codigo_tipo_conta = ? LIMIT 1`,
            [codigoTipoConta]);

        return response.length > 0;
    }

    async inserir(conta: Conta): Promise<Conta> {
        const response = await executarComandoSQL('INSERT INTO contas (numero_conta, id_cliente, saldo, codigo_tipo_conta) VALUES (?, ?, ?, ?)',
            [conta.numeroConta, conta.idCliente, conta.saldo, conta.tipoConta]);

        conta.id = response.insertId;

        return conta;
    }

    async atualiza(conta: Conta): Promise<Conta> {
        const response = await executarComandoSQL(`UPDATE contas SET saldo = ? WHERE id = ?`,
            [conta.saldo, conta.id]);

        return conta;
    }

    async deleta(conta: Conta): Promise<Conta> {
        const response = await executarComandoSQL(`DELETE FROM contas WHERE id = ?`, [conta.id]);

        if (response.affectedRows == 0)
            throw new Error('Nenhuma conta encontrada');

        return conta;
    }

    async buscar(condicao: string, valores: any[]): Promise<Conta> {
        const response = await executarComandoSQL(`SELECT * FROM contas WHERE ${condicao}`, valores);

        if(response.length == 0)
            throw new Error('Conta não encontrada');

        return new Conta(response[0].id, response[0].numero_conta, response[0].saldo, response[0].tipo_conta);
    }

    async buscarTodas() : Promise<any[]> {
        return await executarComandoSQL('SELECT * FROM contas', []);
    }

    async atualizaTipoConta(novo: number, antigo: number) {
        await executarComandoSQL('UPDATE contas SET codigo_tipo_conta = ? WHERE codigo_tipo_conta = ?', [novo, antigo]);
    }

    async buscarPorCliente(id: number) : Promise<any[]> {
        return await executarComandoSQL('SELECT * FROM contas WHERE id_cliente = ?', [id]);
    }

}