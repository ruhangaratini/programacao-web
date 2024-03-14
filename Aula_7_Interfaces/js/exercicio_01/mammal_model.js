"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammal = void 0;
class Mammal {
    constructor(name, canFly) {
        this.name = name;
        this.canFly = canFly;
    }
    printType() {
        return 'Esse animal é um Mamífero';
    }
}
exports.Mammal = Mammal;
