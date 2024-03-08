function orderAsc(array) {
    return array.sort(function (a, b) { return a - b; });
}
console.log(orderAsc([9, 5, 10, 2, 3, 1, 7]));
function weightedAvg() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sumValues = 0;
    var sumWeigth = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var note = values_1[_a];
        sumValues += note.value * note.weigth;
        sumWeigth += note.weigth;
    }
    return sumValues / sumWeigth;
}
console.log(weightedAvg({ value: 10, weigth: 5 }, { value: 5, weigth: 5 }));
function validateCpf(cpf) {
    var cpfDigits = cpf.toString().split('');
    var aux = 0;
    for (var i = 0; i < 9; i++) {
        aux += parseInt(cpfDigits[i]) * (10 - i);
    }
    var firstDigit = (aux * 10) % 11 == 10 ? 0 : (aux * 10) % 11;
    aux = 0;
    for (var i = 0; i < 10; i++) {
        aux += parseInt(cpfDigits[i]) * (11 - i);
    }
    var secondDigit = (aux * 10) % 11 == 10 ? 0 : (aux * 10) % 11;
    return firstDigit.toString() == cpfDigits[9] && secondDigit.toString() == cpfDigits[10];
}
console.log(validateCpf(52998224725));
