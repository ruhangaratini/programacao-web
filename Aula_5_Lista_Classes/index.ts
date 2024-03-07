class Car {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
  
    constructor(brand: string, model: string, year: number, color: string) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
    }

    get getBrand(): string {
      return this.brand;
    }

    set setBrand(brand:string) {
      this.brand = brand;
    }

    get getModel(): string {
      return this.model;
    }

    set setModel(model:string) {
      this.model = model;
    }

    get getYear(): number {
      return this.year;
    }

    set setYear(year:number) {
      this.year = year;
    }

    get getColor(): string {
      return this.color;
    }

    set setColor(color:string) {
      this.color = color;
    }
  
    displayInfo(): void {
      console.log(`Marca: ${this.brand}, Modelo: ${this.model}, Ano: ${this.year}, Cor: ${this.color}`);
    }

    age(): number {
      return new Date().getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Toyota", "Corolla", 2020, "Prata");
  const myNewCar = new Car("Volkswagen", "Voyage", 2012, "Cinza");
  
  myCar.displayInfo();
  myNewCar.displayInfo();
  console.log(myNewCar.age());
  
class Calculator {
  value1:number;
  value2:number;

  constructor(value1:number, value2:number) {
    this.value1 = value1;
    this.value2 = value2;
  }
}

const myCalculator = new Calculator(1, 1);