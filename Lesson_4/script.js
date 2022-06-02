//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let func = (a,b) => a*b;
//- створити функцію яка обчислює та повертає площу кола з радіусом r
/*
let r = prompt("Enter radius of the circle");
let square = function (r) {
return 3.14*(r*r);
}
console.log(square(r));
*/
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*
let h = prompt("Enter height");
let r = prompt("Enter radius");
let func = (height, radius) => 2*3.14*radius*height;
console.log(func(h,r));
*/
//- створити функцію яка приймає масив та виводить кожен його елемент
/*
let arr = ['some', 'thing', 'array', 0, 0, 7];
let func = function (array){
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
func(arr);
*/
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*
let text = prompt("enter some text: ");
let func = (text) => document.write(`<p>${text}</p>`);
func (text);
*/
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*
let text = prompt("Enter some text: ");
(function (text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
})(text);
*/
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*
let text = prompt("Enter some text: ");
let li = +prompt("Enter number of <li>: ");
(function (text, li) {
    document.write(`<ul>`)
    for (let a = 0; a < li; a++){
        document.write(`<li>${text}</li>`);
    }
        document.write(`</ul>`)
})(text, li);
*/
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*
let arr = ['some', 'thing', 'array', 0, 0, 7, true, false];
(function (arr){
    for (let arrElement of arr) {
        document.write(`<p>${arrElement}</p>`)
    }
})(arr);
 */
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
];
(function (array){
    for (let arrayElement of array) {
        document.write(`<div>id ${arrayElement.id}, name: ${arrayElement.name}, age: ${arrayElement.age}</div>`)
    }
})(users);
*/
//- створити функцію яка повертає найменьше число з масиву
/*
let array = [100, -2, 6, 456, 7, 45, 8, 43, 999, 5, 7, 87];
let min = function (arrayOfNumbers){
    let min = arrayOfNumbers[0];
    for (let number of arrayOfNumbers) {
        number < min ? min = number : false;
    }
    console.log(min);
};
min(array);
*/

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*
let array = [1, 2, 3, 66];
let sum = function (arrayOfNumbers){
    let sumOfNumbers = 0;
    for (let number of arrayOfNumbers) {
        sumOfNumbers = sumOfNumbers+number;
    }
    console.log(sumOfNumbers);
};
sum(array);
*/
