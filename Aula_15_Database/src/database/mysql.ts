import mysql, { Connection } from 'mysql2';

const dbConfigs = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'vendas'
};

const mysqlConnection : Connection = mysql.createConnection(dbConfigs);

mysqlConnection.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
        throw err;
    }

    console.log('Conexão com o banco foi bem sucedida!!!');
});

export function executarComandoSQL(query:string, valores: any[], callback: (err:any, result:any) => void) {
    mysqlConnection.query(query, valores, (err, resultado:any) => {
        if(err) {
            console.log('Erro ao executar a query. ', err);
            throw err;
        }

        console.log('Dentro do repository: ', resultado);
        return callback(err, resultado);
    });
}
