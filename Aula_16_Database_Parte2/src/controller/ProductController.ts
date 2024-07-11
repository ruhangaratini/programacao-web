import { Request, Response } from "express";
import { Product } from "../model/Product";
import { ProductService } from "../service/ProductService";

export class ProductController {
    private service = new ProductService();

    public async insertProduct(req:Request, res:Response) : Promise<void> {
        const product = Product.fromJson(req.body);

        if(product instanceof Error) {
            res.status(400).json({ message: product.message });
            return;
        }

        await this.service.insertProduct(product);
        res.status(201).json({ message: 'ok' });
    }

    public async getProduct(req:Request, res:Response) : Promise<void> {
        res.status(200).json(await this.service.getProduct(parseInt(req.params.id)));
    }

    public async updateProduct(req:Request, res:Response) : Promise<void> {
        const product = new Product(req.body);
        await this.service.updateProduct(product);
        res.status(200).json({ message: 'ok' });
    }

    public async deleteProduct(req:Request, res:Response) : Promise<void> {
        await this.service.deleteProduct(req.body.id);
        res.status(202).json({ message: 'ok' });
    }
}