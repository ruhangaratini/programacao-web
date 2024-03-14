import { Animal } from "./animal_interface";

export class Mammal implements Animal {
    name: string;
    canFly: boolean;

    constructor(name:string, canFly:boolean) {
        this.name = name;
        this.canFly = canFly;
    }

    printType(): string {
        return 'Esse animal é um Mamífero';
    }
}