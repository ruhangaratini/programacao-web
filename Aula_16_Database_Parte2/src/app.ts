import express from "express";
import { ProductController } from "./controller/ProductController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

const productController = new ProductController();

app.post("/api/product", productController.insertProduct);
app.get("/api/product/:id", productController.getProduct);
app.put("/api/product", productController.updateProduct);
app.delete("/api/product", productController.deleteProduct);

app.listen(PORT, logInfo);


