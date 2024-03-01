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
    var aux = 0;
    for (var i = 0; i < 9; i++) {
        aux += cpf[i] * (10 - i);
    }
    console.log(aux);
    return false;
}
console.log(validateCpf(52998224725));
