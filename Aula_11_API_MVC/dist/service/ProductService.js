"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../model/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        const { name, description, category, price } = produtoData;
        if (!name || !description || !price) {
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product_1.Product(name, description, category, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtraProdutoPorId(idNumber);
    }
    getProducts(category) {
        return this.productRepository.filtraTodosProdutos(category);
    }
    calculaEstatisticas() {
        let qttProducts = 0;
        let avgPrice = 0;
        let maxPrice;
        let minPrice;
        for (const product of this.productRepository.productList) {
            if (!maxPrice || product.price > maxPrice)
                maxPrice = product.price;
            if (!minPrice || product.price < minPrice)
                minPrice = product.price;
            qttProducts++;
            avgPrice += product.price;
        }
        avgPrice = Math.round(avgPrice / qttProducts);
        return {
            qttProducts: qttProducts,
            avgPrice: avgPrice,
            maxPrice: maxPrice,
            minPrice: minPrice
        };
    }
}
exports.ProductService = ProductService;
