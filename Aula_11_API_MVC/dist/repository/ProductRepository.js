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
    filtraTodosProdutos(category) {
        if (category) {
            return this.productList.filter((product) => product.category == category);
        }
        return this.productList;
    }
}
exports.ProductRepository = ProductRepository;
