"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = require("./repository/ProductRepository");
const repository = new ProductRepository_1.ProductRepository();
// repository.createTable();
repository.insertProduct('bolinho', 25);
// repository.deleteProduct(1);
repository.updateProduct(2, 'suco', 5.99);
