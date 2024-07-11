export class Product {
    id?:number;
    name:string;
    price:number;

    constructor({ id, name, price }:{ id?:number, name:string, price:number}) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static fromJson(json:any) : Product|Error {
        try {
            return new Product({
                id: json.id != null ? json.id as number : undefined,
                name: json.name as string,
                price: json.price as number
            });
        } catch (error) {
            return new Error('Produto inválido');
        }
    }
}