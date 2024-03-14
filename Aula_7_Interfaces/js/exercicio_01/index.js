"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mammal_model_1 = require("./mammal_model");
const bird_model_1 = require("./bird_model");
function printAnimal(animal) {
    animal.printType();
    console.log("Nome: ", animal.name);
    console.log("Pode voar: ", animal.canFly);
}
const bird = new bird_model_1.Bird("João de Barro");
const mammal = new mammal_model_1.Mammal("Antônio", false);
printAnimal(bird);
printAnimal(mammal);
