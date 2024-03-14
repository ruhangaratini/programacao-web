import { Employee } from "./employee_interface";

export class Manager implements Employee {
    name: string;
    salary: number;

    constructor(name:string, salary:number) {
        this.name = name;
        this.salary = salary;
    }

    role(): string {
        return 'Gerente';
    }
}