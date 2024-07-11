import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    private repository = new ProductRepository();

    public insertProduct(produto:Product) {
        return this.repository.insertProduct(produto);
    }

    public async getProduct(id:number) {
        return this.repository.getProduct(id);
    }

    public updateProduct(produto:Product) {
        return this.repository.updateProduct(produto);
    }

    public deleteProduct(id:number) {
        return this.repository.deleteProduct(id);
    }
}