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
app.get("/api/product", productController.getProduct);
app.put("/api/product", productController.updateProduct);

app.listen(PORT, logInfo);


