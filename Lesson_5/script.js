/*
Все стірлочними!!!!!!!!!


- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
*/
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
let numbers = [4, 7, 5, 3, 7, 9, 4, 3, 5, 7];
let arithmeticMean = (array) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}
console.log(arithmeticMean(numbers));;
*/
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*
let array = [100, -2, 6, 456, 7, 45, 8, 43, 99, 5, 7, 87];
let max = (arrayOfNumbers) => {
    let max = arrayOfNumbers[0];
    let min = arrayOfNumbers[0];
    for (let number of arrayOfNumbers) {
        number > max ? max = number : false;
        number < min ? min = number : false;
    }
    console.log(max);
};
max(array);
*/
//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*
let arr = [];
let func = (array) => {
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.round(Math.random()*100);
        Math.round(randomNumber);
        array.push(randomNumber);
    }
}
func(arr);
console.log(arr);
*/
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*
let arr = [];
let limit = prompt("Enter how many numbers you want");
let func = (array, limit) => {
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.round(Math.random()*100);
        Math.round(randomNumber);
        array.push(randomNumber);
    }
}
func(arr, limit);
console.log(arr);
*/

//-створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
/*
let arr = [{
    name: 'olga', age: 25, status: false
},
    {name: 'oleg', age: 60, status: true}];

let func = (array) => {
    console.log(arr);
    array.push(array[0]);
    array.shift();
    console.log(arr);
    return array;
}
func(arr);
*/
//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
/*
let arr = [1, 2, 0, 3, 4, 0, 6, 5, 0];
let func = (array) => {
    for (let i = 0; i < array.length; i++) array[i] === 0 ? array.splice(i, 1) && array.push(0) : 0;
}
console.log(arr);
func(arr);
console.log(arr);
*/
