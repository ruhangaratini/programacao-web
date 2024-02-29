function maxNumber(...numbers:number[]) : number {
    let aux:number = numbers[0];
    for(const n of numbers)
        if(n > aux)
            aux = n;
    return aux;
}

console.log(maxNumber(1, 9, 5, 21, 4, 3, 2));

function isEven(num:number) : boolean {
    return num % 2 == 0;
}

console.log(isEven(2));

function avg(...numbers:number[]) : number {
    let sum:number = 0;
    for(const num of numbers) {
        sum += num;
    }
    return sum/numbers.length;
}

console.log(avg(avg(1, 2, 3, 4, 5), avg(6, 7, 8, 9, 10)));

function upperCase(text:string) : string {
    return text.toUpperCase();
}

console.log(upperCase('testeee'));
console.log(upperCase('AbcDefgh'));

function isPrimeNumber(num:number) : boolean {
    for(let i:number = 2; i < num/2 + 1; i++)
        if(num % i == 0) return false;
    return true;
}

console.log(isPrimeNumber(9));

function arrayReverse(...numbers:number[]) : number[] {
    return numbers.reverse();
}

console.log(arrayReverse(1, 2, 3, 4, 5));
console.log(arrayReverse(9, 8, 7, 6, 5));

function addPercentage(num:number, percentage:number) : number {
    return num + (num * (percentage/100));
}

console.log(addPercentage(10, 50));

function reverseString(text:string) : string {
    return text.split('').reverse().join('');
}

console.log(reverseString('abcdefgh'));

function sumEven(...numbers:number[]) : number {
    let sum:number = 0;
    for(const num of numbers)
        if(num % 2 == 0) sum += num;
    return sum;
}

console.log(sumEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function factorial(num:number) : number {
//     for(let i:number = num; i > num; i--)
//         num *= i;
//     return num;
// }

// console.log(factorial(3));
// console.log(factorial(4));