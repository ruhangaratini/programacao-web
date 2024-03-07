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
    return Calculator;
}());
var myCalculator = new Calculator(1, 1);
