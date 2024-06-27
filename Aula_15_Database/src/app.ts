import { ProductRepository } from "./repository/ProductRepository";

const repository:ProductRepository = new ProductRepository();

// repository.createTable();
repository.insertProduct('bolinho', 25);
// repository.deleteProduct(1);
repository.updateProduct(2, 'suco', 5.99);