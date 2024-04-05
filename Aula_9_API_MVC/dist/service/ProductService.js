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
        const { name, description, price } = produtoData;
        if (!name || !description || !price) {
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product_1.Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id, nome) {
        if (id) {
            const idNumber = parseInt(id, 10);
            console.log(id);
            return this.productRepository.filtraProdutoPorId(idNumber);
        }
        else {
            const nomeProduto = String(nome);
            console.log(nomeProduto);
            return this.productRepository.filtrarProdutoPorNome(nomeProduto);
        }
    }
    getProducts(ordem) {
        return this.productRepository.filtraTodosProdutos(ordem);
    }
}
exports.ProductService = ProductService;
