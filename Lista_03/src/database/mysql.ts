import mysql from "mysql2";


const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ruhan',
};

const connection = mysql.createConnection(config);

export function DbQuery(query: string, values?: any[]) : Promise<any> {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (e, result) => {
            if(e) {
                reject(e);
                throw e;
            }

            resolve(result);
        });
    });
}