
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
/*function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}*/
//створити пустий масив, наповнити його 10 об'єктами new User(....)

/*
let arrayOfUsers =[];
arrayOfUsers.push(new User('1', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('2', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('9', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('4', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('6', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('5', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('7', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('8', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('3', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
arrayOfUsers.push(new User('10', 'Yura', 'Tyrkus', 'darkdedok@gmail.com', '0985344670'));
*/

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(arrayOfUsers.filter(arrayOfUsers => arrayOfUsers.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//console.log(arrayOfUsers.sort((a, b) => a.id - b.id))

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
/*

class Client {
    constructor(id, name, surname, email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let arrayOfClients = [];

for (let i =1; i<=4; i++){
    arrayOfClients.push(new Client(i, 'Natali', 'Tyrkus', 'some_email@gmail.com', '0987654321', ['milk', 'bread', 'potato']));
}
arrayOfClients[0].order.push('tomato');
arrayOfClients[1].order.push('tomato','meat');
arrayOfClients[2].order.push('tomato','meat', 'yogurt');
//console.log(arrayOfClients);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrayOfClients.sort((a, b) => a.order.length - b.order.length));
*/

/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
/*

function Car(model, producer, date, speed, engine) {
    this.model = model;
    this.producer = producer;
    this.date = date;
    this.speed = speed;
    this.engine = engine;

    this.drive = function drive() {
        console.log(`їдемо зі швидкістю ${speed} на годину`)
    }

    this.info = function info() {
        console.log(`Model ---- ${model}`)
        console.log(`Producer ---- ${producer}`)
        console.log(`Date ---- ${date}`)
        console.log(`Speed ---- ${speed}`)
        console.log(`Engine ---- ${engine}`)
    }

    this.increaseMaxSpeed = (newSpeed) => speed = newSpeed;
    this.changeYear = (newValue) => date = newValue;
    this.addDriver = (driver) => this.driver = driver;
   // this.addDriver = function (driver){this.driver = driver};
}

let skoda = new Car('Skoda', 'EU', '2015', 240, 500);
console.log(skoda)
skoda.drive();
skoda.increaseMaxSpeed(9999);
skoda.changeYear(1990);
skoda.addDriver({
    name: 'Natali',
    surname: 'Tyrkus'
});
console.log(skoda)*/

/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
/*
class Car {
    constructor(model, producer, date, speed, engine) {
        this.model = model;
        this.producer = producer;
        this.date = date;
        this.speed = speed;
        this.engine = engine;

        this.drive = function drive() {
            console.log(`їдемо зі швидкістю ${speed} на годину`)
        }

        this.info = function info() {
            console.log(`Model ---- ${model}`)
            console.log(`Producer ---- ${producer}`)
            console.log(`Date ---- ${date}`)
            console.log(`Speed ---- ${speed}`)
            console.log(`Engine ---- ${engine}`)
        }

        this.increaseMaxSpeed = (newSpeed) => speed = newSpeed;
        this.changeYear = (newValue) => date = newValue;
        this.addDriver = (driver) => this.driver = driver;
        // this.addDriver = function (driver){this.driver = driver};
    }
}

let skoda = new Car('Skoda', 'EU', '2015', 240, 500);
console.log(skoda)
skoda.drive();
skoda.increaseMaxSpeed(9999);
skoda.changeYear(1990);
skoda.addDriver({
    name: 'Natali',
    surname: 'Tyrkus'
});
console.log(skoda)
*/
/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
    */
/*
function Cinderella(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let arrayOfCinderellas = [];
arrayOfCinderellas.push(new Cinderella('Natali', 20, 37));
arrayOfCinderellas.push(new Cinderella('Olga', 24, 38));
arrayOfCinderellas.push(new Cinderella('Inna', 23, 40));

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
const yurii = new Prince('Yurii', 26, 37);

for (const cinderella of arrayOfCinderellas) {
    cinderella.footSize === yurii.shoeSize ? console.log(`Yurii must married with ${cinderella.name}`) : false;
}
let find = (arrayOfCinderellas, prince) => {
    for (const cinderella of arrayOfCinderellas) {
        cinderella.footSize === yurii.shoeSize ? console.log(`Yurii must married with ${cinderella.name}`) : false;
    }
}
find(arrayOfCinderellas, yurii);*/
