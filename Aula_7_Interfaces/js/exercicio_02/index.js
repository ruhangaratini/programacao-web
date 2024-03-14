"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_model_1 = require("./manager_model");
const developer_model_1 = require("./developer_model");
function printEmployee(employee) {
    console.log("cargo: ", employee.role());
    console.log("Nome: ", employee.name);
    console.log("Salário: ", employee.salary);
}
const manager = new manager_model_1.Manager("Ricado", 12500);
const developer = new developer_model_1.Developer("Jefferson", 4500);
printEmployee(manager);
printEmployee(developer);
