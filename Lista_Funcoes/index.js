function maxNumber() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var aux = numbers[0];
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var n = numbers_1[_a];
        if (n > aux)
            aux = n;
    }
    return aux;
}
console.log(maxNumber(1, 9, 5, 21, 4, 3, 2));
function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(2));
function avg() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
        var num = numbers_2[_a];
        sum += num;
    }
    return sum / numbers.length;
}
console.log(avg(avg(1, 2, 3, 4, 5), avg(6, 7, 8, 9, 10)));
function upperCase(text) {
    return text.toUpperCase();
}
console.log(upperCase('testeee'));
console.log(upperCase('AbcDefgh'));
function isPrimeNumber(num) {
    for (var i = 2; i < num / 2 + 1; i++)
        if (num % i == 0)
            return false;
    return true;
}
console.log(isPrimeNumber(9));
function arrayReverse() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reverse();
}
console.log(arrayReverse(1, 2, 3, 4, 5));
console.log(arrayReverse(9, 8, 7, 6, 5));
function addPercentage(num, percentage) {
    return num + (num * (percentage / 100));
}
console.log(addPercentage(10, 50));
function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log(reverseString('abcdefgh'));
function sumEven() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_3 = numbers; _a < numbers_3.length; _a++) {
        var num = numbers_3[_a];
        if (num % 2 == 0)
            sum += num;
    }
    return sum;
}
console.log(sumEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function factorial(num) {
    if (num == 0)
        return 1;
    for (var i = num - 1; i > 0; i--)
        num *= i;
    return num;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(0));
