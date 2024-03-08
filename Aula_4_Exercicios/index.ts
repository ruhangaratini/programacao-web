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
    const cpfDigits:string[] = cpf.toString().split('');
    let aux:number = 0;
    for(let i:number = 0; i < 9; i++) {
        aux += parseInt(cpfDigits[i]) * (10-i);
    }
    const firstDigit:number = (aux*10) % 11 == 10 ? 0 : (aux*10) % 11;
    
    aux = 0;
    for(let i:number = 0; i < 10; i++) {
        aux += parseInt(cpfDigits[i]) * (11-i);
    }
    const secondDigit:number = (aux*10) % 11 == 10 ? 0 : (aux*10) % 11;

    return firstDigit.toString() == cpfDigits[9] && secondDigit.toString() == cpfDigits[10];
}

console.log(validateCpf(52998224725));