function orderAsc(array:number[]) : number[] {
    return array.sort((a, b) => a - b);
}

console.log(orderAsc([9, 5, 10, 2, 3, 1, 7]));

function weightedAvg(...values: {value:number, weigth:number}[]) : number {
    let sumValues:number = 0;
    let sumWeigth:number = 0;
    for(const note of values) {
        sumValues += note.value * note.weigth;
        sumWeigth += note.weigth;
    }
    return sumValues/sumWeigth;
}

console.log(weightedAvg({value: 10, weigth: 5}, {value: 5, weigth: 5}));

function validateCpf(cpf:number) : boolean {
    let aux:number = 0;
    for(let i:number = 0; i < 9; i++) {
        aux += cpf[i] * (10-i);
    }
    console.log(aux);
    return false;
}

console.log(validateCpf(52998224725));