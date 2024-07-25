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

    async atualizar(tipoConta: TipoConta): Promise<TipoConta> {
        const response = await executarComandoSQL(`UPDATE tipos_conta SET descricao = ?, codigo_tipo_conta = ? WHERE id = ?`,
            [tipoConta.descricao, tipoConta.codigoTipoConta, tipoConta.id]);

        return tipoConta;
    }

    async descricaoExistente(descricao: string): Promise<boolean> {
        const response = await executarComandoSQL(`SELECT id FROM tipos_conta WHERE descricao = ? LIMIT 1`,
            [descricao]);

        return response.length > 0;
    }

    async buscarPorID(id: number) : Promise<TipoConta> {
        const response = await executarComandoSQL(`SELECT * FROM tipos_conta WHERE id = ?`, [id]);

        return new TipoConta(response[0].id, response[0].descricao, response[0].codigo_tipo_conta);
    }

    async deletar(tipoConta: TipoConta) : Promise<TipoConta> {
        const response = await executarComandoSQL('DELETE FROM tipos_conta WHERE id = ?', [tipoConta.id]);

        if(response.affectedRows == 0) {
            throw new Error('tipo de conta não encontrado');
        }

        return tipoConta;
    }

    async buscar(condicao: string, valores: any[]) : Promise<TipoConta> {
        const response = await executarComandoSQL(`SELECT * FROM tipos_conta WHERE ${condicao}`, valores);

        if(response.length == 0) 
            throw new Error('Tipo conta não encontrado');

        return new TipoConta(response[0].id, response[0].descricao, response[0].codigo_tipo_conta);
    }

    async buscarTodos() : Promise<any[]> {
        return await executarComandoSQL('SELECT * FROM tipos_conta', []);
    }

    async codigoExistente(codigo: number): Promise<boolean> {
        const response = await executarComandoSQL(`SELECT id FROM tipos_conta WHERE codigo_tipo_conta = ? LIMIT 1`,
            [codigo]);

        return response.length > 0;
    }
}