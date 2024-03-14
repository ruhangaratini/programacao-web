"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
class Manager {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    role() {
        return 'Gerente';
    }
}
exports.Manager = Manager;
