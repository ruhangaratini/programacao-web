import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta";

export class TipoContaRepository {
    constructor() {
        this.createTable();
    }

    private async createTable() {
        await executarComandoSQL(`
        CREATE TABLE IF NOT EXISTS tipos_conta (
            id INT AUTO_INCREMENT PRIMARY KEY,
            descricao VARCHAR (255),
            codigo_tipo_conta VARCHAR (50) UNIQUE
        )`, []);
    }

    async inserir(tipoConta: TipoConta): Promise<TipoConta> {
        const response = await executarComandoSQL(`INSERT INTO tipos_conta (descricao, codigo_tipo_conta) VALUES (?, ?)`,
            [tipoConta.descricao, tipoConta.codigoTipoConta]);

        tipoConta.id = response.insertId;

        return tipoConta;
    }

    async update(tipoConta: TipoConta): Promise<TipoConta> {
        const response = await executarComandoSQL(`UPDATE tipos_conta SET descricao = ?, codigo_tipo_conta = ? WHERE id = ?`,
            [tipoConta.descricao, tipoConta.codigoTipoConta, tipoConta.id]);

        return tipoConta;
    }
}