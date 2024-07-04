import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    private repository = new ProductRepository();

    public insertProduct(produto:Product) {
        this.repository.insertProduct(produto);
    }

    public getProduct(id:number) {

    }

    public updateProduct(id:number, produto:Product) {
        this.repository.updateProduct(id, produto);
    }

    public deleteProduct(id:number) {
        this.repository.deleteProduct(id);
    }
}