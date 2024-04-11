import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, category, price } = produtoData;
        if(!name || !description || !price ){
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product(name, description, category, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any): Product|undefined{
        const idNumber: number = parseInt(id, 10);
        console.log(id)
        return this.productRepository.filtraProdutoPorId(idNumber);
    }

    getProducts(category:any):Product[]{
        return this.productRepository.filtraTodosProdutos(category);
    }

    calculaEstatisticas():Object {
        let qttProducts:number = 0;
        let avgPrice:number = 0;
        let maxPrice:number|undefined;
        let minPrice:number|undefined;

        for(const product of this.productRepository.productList) {
            if(!maxPrice || product.price > maxPrice)
                maxPrice = product.price;
            if(!minPrice || product.price < minPrice)
                minPrice = product.price;
            qttProducts++;
            avgPrice += product.price;
        }

        avgPrice = Math.round(avgPrice/qttProducts);

        return {
            qttProducts: qttProducts,
            avgPrice: avgPrice,
            maxPrice: maxPrice,
            minPrice: minPrice
        };
    }
}