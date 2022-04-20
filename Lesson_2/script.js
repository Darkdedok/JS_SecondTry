//- Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
/*let x = prompt("Enter some thing: ");
console.log(x==0 ? "Right" : "Wrong");*/

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
/*
let time = +prompt("Enter from 0 to 59: ");
if (0 <= time && time <= 10){
    console.log("It's 1st past of hour");
}
else if(11 <= time && time <= 20){
    console.log("It's second past of hour");
}
else if(21 <= time && time <= 30){
    console.log("It's thirst past of hour");
}
else if(31 <= time && time <= 40){
    console.log("It's fourth past of hour");
}
else {
    console.log("Wrong number");
}
*/

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
/*
let day = +prompt("Enter number of day");
switch (day) {
    case day = 1:
        console.log("It's monday");
        break;
    case day = 2:
        console.log("It's tuesday");
        break;
    case day = 3:
        console.log("It's wednesday");
        break;
    case day = 4:
        console.log("It's thursday");
        break;
    case day = 5:
        console.log("It's friday");
        break;
    case day = 6:
        console.log("It's saturday");
        break;
    case day = 7:
        console.log("It's sunday");
        break;
    default :
        console.log("Wrong number");
}
*/

//   - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//       Також потрібно врахувати коли введені рівні числа.
/*
let a = prompt("Enter 1st number");
let b = prompt("Enter second number");
if (a>b){
    alert(`Max number is: ${a}`)
}
else if (b>a){
    alert(`Max number is: ${b}`)
}
else if (a===b){
    alert("Numbers are equal")
}
*/
