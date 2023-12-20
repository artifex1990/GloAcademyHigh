'use strict'

const maxIterations = 7;
const maxNumbersForSimpleNumbers = 100;
let arr = [];
let isElementBeginOn2And4 = false;

const isSimpleNumber = function(number) {
    let numberOfDivisors = 0;
    let indexIteration = 1;

    while (indexIteration <= number) {
        if (number % indexIteration === 0) {
            numberOfDivisors++;
        }
        indexIteration++;
    }

    return number === 1 || numberOfDivisors === 2;
}

function generateNumbers(maxIterations) {
    const arr = [];

    for (let indexIteration = 0; indexIteration < maxIterations; indexIteration++) {
        arr.push(Math.ceil(Math.random() * 10 ** Math.ceil(Math.random() * 10 + 1)));
    }

    return arr;
}

console.log('Элементы массива начинающиеся на 2 и 4 в сгенерированном массиве!');
arr = generateNumbers(maxIterations);
console.log('Сгенерированный массив:');
console.log(arr);
console.log('Результат:');
arr.forEach(num => {
    const firstNumber = `${num}`[0];
    if (firstNumber === '2' || firstNumber === '4') {
        console.log(num);
        isElementBeginOn2And4 = true;
    }
});
if (!isElementBeginOn2And4) {
    console.log('Элементы массива начинающиеся на 2 и 4 -> не найдены!');
}

console.log('=========Простые числа!===========');
for (let checkNumberOnSimple = 2; checkNumberOnSimple < maxNumbersForSimpleNumbers + 1; checkNumberOnSimple++) {
    if (isSimpleNumber(checkNumberOnSimple)) {
        console.log(`Делители числа ${checkNumberOnSimple}: 1 и ${checkNumberOnSimple}`);
    }
}