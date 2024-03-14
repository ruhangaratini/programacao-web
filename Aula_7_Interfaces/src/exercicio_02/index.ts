import { Employee } from "./employee_interface";
import { Manager } from "./manager_model";
import { Developer } from "./developer_model";

function printEmployee(employee: Employee): void {
    console.log("cargo: ", employee.role());
    console.log("Nome: ", employee.name);
    console.log("Salário: ", employee.salary);
}

const manager = new Manager("Ricado", 12500);
const developer = new Developer("Jefferson", 4500);

printEmployee(manager);
printEmployee(developer);