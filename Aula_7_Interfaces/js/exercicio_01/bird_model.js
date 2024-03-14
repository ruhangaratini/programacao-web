"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
        this.canFly = true;
    }
    printType() {
        return 'Esse animal é uma Ave';
    }
}
exports.Bird = Bird;
