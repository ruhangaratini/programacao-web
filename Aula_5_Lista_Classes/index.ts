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
  private value1:number;
  private value2:number;

  constructor(value1:number, value2:number) {
    this.value1 = value1;
    this.value2 = value2;
  }

  get getValue1() : number {
    return this.value1;
  }

  set setValue1(value:number) {
    this.value1 = value;
  }

  get getValue2() : number {
    return this.value2;
  }

  set setValue2(value:number) {
    this.value2 = value;
  }

  sum(): number {
    return this.value1 + this.value2;
  }

  subtract() : number {
    return this.value1 - this.value2;
  }

  multiply(): number {
    return this.value1 * this.value2;
  }

  divide() : number {
    if(this.value2 == 0) throw new Error("Não é possível dividir por zero");
    return this.value1 / this.value2;
  }

  percentage() : number {
    return this.value1/100 * this.value2;
  }

}

const myCalculator = new Calculator(20, 10);
console.log('Soma: ', myCalculator.sum());
console.log('Subtração: ', myCalculator.subtract());
console.log('Multiplicação: ', myCalculator.multiply());
console.log('Porcentagem: ', myCalculator.percentage());
console.log('Divisão: ', myCalculator.divide());

myCalculator.setValue2 = 0;

// console.log('Divisão por zero: ', myCalculator.divide());

class Product {
  name:string;
  price:number;
  stock:number;
  
  constructor (name:string, price:number, stock:number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  get getName() : string {
    return this.name;
  }

  set setName(name:string) {
    this.name = name;
  }

  get getPrice() : number {
    return this.price;
  }

  set setPrice(price:number) {
    this.price = price;
  }

  get getStock() : number {
    return this.stock;
  }

  set setStock(stock:number) {
    this.stock = stock;
  }

  totalValueInStock() : number {
    return this.price * this.stock;
  }

  addStock(quantity:number) {
    this.stock += quantity;
  }

  sale(quantity:number) {
    if(this.stock - quantity < 0)
      throw new Error('Estoque insuficiente');
    this.stock -= quantity;
  }
}

let mouse = new Product("Mouse Brastemp", 56.89, 10);
console.log('Valor total em estoque: ', mouse.totalValueInStock());
mouse.addStock(5);
mouse.sale(3);
console.log("estoque: ", mouse.getStock);