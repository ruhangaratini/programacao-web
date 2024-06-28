import mysql, { Connection } from 'mysql2';

const dbConfigs = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'vendas'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfigs);

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
        throw err;
    }

    console.log('Conexão com o banco foi bem sucedida!!!');
});

export function executarComandoSQL(query: string, valores: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => mysqlConnection.query(query, valores, (err, resultado: any) => {
        if (err) {
            console.error('Erro ao executar a query.', err);
            reject(err);
            throw err;
        }

        console.log('Dentro do repository: ', resultado);
        resolve(resultado);
    }));
}

export async function tableExists(tableName: string): Promise<boolean> {
    const result: any[] = await executarComandoSQL('SHOW TABLES LIKE ?', ['%' + tableName + '%']);
    try {
        return new Promise<boolean>((resolve, reject) => {
            resolve(result.length > 0);
        });
    } catch (err) {
        throw err;
    }

}
