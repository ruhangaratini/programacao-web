export class Product{
    id:number;
    name:string;
    description:string;
    category:string;
    price:number;

    constructor(name:string, description:string, category:string, price:number){
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}