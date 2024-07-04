import { executarComandoSQL, tableExists } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE Vendas.Product (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255) NOT NULL, 
            price DECIMAL(10,2) NOT NULL
        )`;

        try {
            if(!(await tableExists('Product')))
                await executarComandoSQL(query, []);
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    async insertProduct(product:Product) {
        try {
            const resultado = await executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [product.name, product.price],
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }

    async getProduct(id:number) {
        try {
            const resultado = await executarComandoSQL('SELECT * FROM vendas.Product WHERE id = ?', [id]);
            console.log('Produto atualizado com sucesso: ', resultado);
            return resultado;
        } catch (err) {
            console.error('Erro ao atualizar produto: ', err);
        }
    }

    async updateProduct(id:number, product:Product) {
        try {
            const resultado = await executarComandoSQL('UPDATE vendas.Product SET name = ?, price = ? WHERE id = ?', [product.name, product.price, id]);
            console.log('Produto atualizado com sucesso: ', resultado);
        } catch (err) {
            console.error('Erro ao atualizar produto: ', err);
        }
    }

    async deleteProduct(id:number) {
        try {
            const resultado = await executarComandoSQL('DELETE FROM vendas.Product WHERE id = ?', [id]);
            console.log('Produto deletado com sucesso: ', resultado);
        } catch (err) {
            console.error('Erro ao deletar produto: ', err);
        }
    }
    
}