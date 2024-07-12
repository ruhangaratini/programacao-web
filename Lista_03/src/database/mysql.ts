import mysql from "mysql2";

export class DataBase {
    private config = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'ifsp',
    };

    private connection = mysql.createConnection(this.config);

    public query(query: string, values: any[]) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (e, result) => {
                if(e) {
                    reject(e);
                    throw e;
                }

                resolve(result);
            })
        });
    }
}
