"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
let products = [];
function appLog() {
    console.log("A API se encontra disponível no URL: http://localhost:3000");
}
function createProduct(req, res) {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({ id: newProduct.id });
}
function getProduct(req, res) {
    const product = products.find((element) => String(element.id) == req.params.id);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.status(200).json(product);
}
app.post('/api/product', createProduct);
app.get('/api/product/:id', getProduct);
app.listen(PORT, appLog);
