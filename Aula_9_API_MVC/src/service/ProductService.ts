import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price } = produtoData;
        if(!name || !description || !price ){
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id:any, nome:any): Product|undefined {
        if(id) {
            const idNumber: number = parseInt(id, 10);
            console.log(id);
            return this.productRepository.filtraProdutoPorId(idNumber);
        } else {
            const nomeProduto: String = String(nome);
            console.log(nomeProduto);
            return this.productRepository.filtrarProdutoPorNome(nomeProduto);
        }
    
    }

    getProducts(ordem: any):Product[]{
        return this.productRepository.filtraTodosProdutos(ordem);
    }
}