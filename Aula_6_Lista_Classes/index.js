var Car = /** @class */ (function () {
    function Car(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    Object.defineProperty(Car.prototype, "getBrand", {
        get: function () {
            return this.brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setBrand", {
        set: function (brand) {
            this.brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setModel", {
        set: function (model) {
            this.model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getYear", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setYear", {
        set: function (year) {
            this.year = year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setColor", {
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.displayInfo = function () {
        console.log("Marca: ".concat(this.brand, ", Modelo: ").concat(this.model, ", Ano: ").concat(this.year, ", Cor: ").concat(this.color));
    };
    Car.prototype.age = function () {
        return new Date().getFullYear() - this.year;
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020, "Prata");
var myNewCar = new Car("Volkswagen", "Voyage", 2012, "Cinza");
myCar.displayInfo();
myNewCar.displayInfo();
console.log(myNewCar.age());
var Calculator = /** @class */ (function () {
    function Calculator(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    Object.defineProperty(Calculator.prototype, "getValue1", {
        get: function () {
            return this.value1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "setValue1", {
        set: function (value) {
            this.value1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "getValue2", {
        get: function () {
            return this.value2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "setValue2", {
        set: function (value) {
            this.value2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Calculator.prototype.sum = function () {
        return this.value1 + this.value2;
    };
    Calculator.prototype.subtract = function () {
        return this.value1 - this.value2;
    };
    Calculator.prototype.multiply = function () {
        return this.value1 * this.value2;
    };
    Calculator.prototype.divide = function () {
        if (this.value2 == 0)
            throw new Error("Não é possível dividir por zero");
        return this.value1 / this.value2;
    };
    Calculator.prototype.percentage = function () {
        return this.value1 / 100 * this.value2;
    };
    return Calculator;
}());
var myCalculator = new Calculator(20, 10);
console.log('Soma: ', myCalculator.sum());
console.log('Subtração: ', myCalculator.subtract());
console.log('Multiplicação: ', myCalculator.multiply());
console.log('Porcentagem: ', myCalculator.percentage());
console.log('Divisão: ', myCalculator.divide());
myCalculator.setValue2 = 0;
// console.log('Divisão por zero: ', myCalculator.divide());
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setPrice", {
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getStock", {
        get: function () {
            return this.stock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setStock", {
        set: function (stock) {
            this.stock = stock;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.totalValueInStock = function () {
        return this.price * this.stock;
    };
    Product.prototype.addStock = function (quantity) {
        this.stock += quantity;
    };
    Product.prototype.sale = function (quantity) {
        if (this.stock - quantity < 0)
            throw new Error('Estoque insuficiente');
        this.stock -= quantity;
    };
    return Product;
}());
var mouse = new Product("Mouse Brastemp", 56.89, 10);
console.log('Valor total em estoque: ', mouse.totalValueInStock());
mouse.addStock(5);
mouse.sale(3);
console.log("estoque: ", mouse.getStock);
