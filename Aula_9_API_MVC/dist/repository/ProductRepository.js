"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        this.productList = [];
    }
    insereProduto(product) {
        this.productList.push(product);
    }
    filtraProdutoPorId(id) {
        return this.productList.find(product => product.id === id);
    }
    filtrarProdutoPorNome(name) {
        return this.productList.find(product => product.name === name);
    }
    filtraTodosProdutos(order) {
        if (String(order) == 'asc')
            return this.productList.sort((a, b) => a.price - b.price);
        if (String(order) == 'desc')
            return this.productList.sort((a, b) => b.price - a.price);
        return this.productList;
    }
}
exports.ProductRepository = ProductRepository;
