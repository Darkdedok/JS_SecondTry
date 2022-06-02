
//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
/*
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.length);
console.log(b.length);
console.log(c.length);
*/
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
/*
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
*/
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*
let a = 'HELLO WORLD';
let b = 'LOREM IPSUM';
let c = 'JAVASCRIPT IS COOL';
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());
*/
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*
let str = ' dirty string   ';
console.log(str.trim());
*/
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
/*
 let str = 'Ревуть воли як ясла повні';
   let arr = str.split(' ');
console.log(arr);
*/

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
/*
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newArr = arr.map(value => value.toString());
console.log(newArr);
*/
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
/*
let sortNums = (array, direction) => {
    if (direction === 'ascending'){
        console.log(array.sort((a,b) => a-b));
    }
    else if (direction === 'descending'){
        console.log(array.sort((a,b) => b-a));
    }
    else console.log('Something wrong');
        };
sortNums(nums, "ascending");
*/
/*
- є масив
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
*/
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort(coursesAndDurationArray));
let filet = (array) => array.filter(value => value.monthDuration >= 5);
console.log(filet(coursesAndDurationArray));
*/
/*
описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше


{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
    */
