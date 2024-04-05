import express, {Request, Response} from "express";
import Product from "./model/product_model";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

let products:Product[] = [];

function appLog() {
    console.log("A API se encontra disponível no URL: http://localhost:3000");
}

function createProduct(req: Request, res: Response) {
    const newProduct:Product = req.body;
    products.push(newProduct);
    res.status(201).json({id: newProduct.id});
}

function getProduct(req: Request, res: Response) {
    const product:Product|undefined = products.find((element) => String(element.id) == req.params.id);
    if(!product) {
        res.status(404).json({message: "Product not found"});
        return;
    }
    res.status(200).json(product);
}

function getAllProducts(req: Request, res: Response) {
    if(products.length == 0)
        res.status(200).json({message: "Nenhum produto cadastrado"});
    else
        res.status(200).json({products});
}

app.post('/api/product', createProduct);
app.get('/api/product/:id', getProduct);
app.get('/api/products', getAllProducts);

app.listen(PORT, appLog);