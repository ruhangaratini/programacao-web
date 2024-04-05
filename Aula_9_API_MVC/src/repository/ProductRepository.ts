import { Product } from "../model/Product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProdutoPorId(id:number): Product|undefined{
        return this.productList.find(product => product.id === id);
    }

    filtrarProdutoPorNome(name:String): Product|undefined {
        return this.productList.find(product => product.name === name);
    }

    filtraTodosProdutos(order:any):Product[]{
        if(String(order) == 'asc')
            return this.productList.sort((a, b) => a.price - b.price);
        if(String(order) == 'desc')
            return this.productList.sort((a, b) => b.price - a.price);
        return this.productList;
    }

}