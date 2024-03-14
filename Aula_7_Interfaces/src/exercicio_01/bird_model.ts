import { Animal } from "./animal_interface";

export class Bird implements Animal {
    name: string;
    canFly: boolean;

    constructor(name:string) {
        this.name = name;
        this.canFly = true;
    }

    printType(): string {
        return 'Esse animal é uma Ave';
    }
}