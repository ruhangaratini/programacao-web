import { Animal } from "./animal_interface";
import { Mammal } from "./mammal_model";
import { Bird } from "./bird_model";

function printAnimal(animal:Animal): void {
    animal.printType();
    console.log("Nome: ", animal.name);
    console.log("Pode voar: ", animal.canFly);
}

const bird = new Bird("João de Barro");
const mammal = new Mammal("Antônio", false);

printAnimal(bird);
printAnimal(mammal);