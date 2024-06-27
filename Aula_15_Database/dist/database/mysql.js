"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarComandoSQL = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dbConfigs = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'vendas'
};
const mysqlConnection = mysql2_1.default.createConnection(dbConfigs);
mysqlConnection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
        throw err;
    }
    console.log('Conexão com o banco foi bem sucedida!!!');
});
function executarComandoSQL(query, valores, callback) {
    mysqlConnection.query(query, valores, (err, resultado) => {
        if (err) {
            console.log('Erro ao executar a query. ', err);
            throw err;
        }
        console.log('Dentro do repository: ', resultado);
        return callback(err, resultado);
    });
}
exports.executarComandoSQL = executarComandoSQL;
