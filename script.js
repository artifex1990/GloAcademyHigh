const title = 'Название проекта';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 123;
const rollback = Math.trunc(Math.random() * 100 + 1);
const fullPrice = Infinity;
const adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//Вывести в консоль длину строки из переменной screens
console.log(screens.length);

/*
Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани”
и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
*/
console.log(`${screenPrice} рублей`);
console.log(`${screenPrice / 89,7} долларов`);
console.log(`${screenPrice / 2,42} гривен`);
console.log(`${screenPrice / 12,61} юани`);

console.log(`${rollback} рублей`);
console.log(`${rollback / 89,7} долларов`);
console.log(`${rollback / 2,42} гривен`);
console.log(`${rollback / 12,61} юани`);

//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(''));

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));