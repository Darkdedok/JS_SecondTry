/*
Все робити за допомоги js.
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.

const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.cssText = 'background-color : blue; color : white; font-size: 30px';
block.innerHTML = '<hr/>' +
    'Hello World';
document.body.appendChild(block);
const blockClone = block.cloneNode(true);
document.body.appendChild(blockClone);

- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.

const array = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.createElement('ul');
document.body.appendChild(menu);
for (const element of array) {
    const option = document.createElement('li');
    option.innerText = `${element}`;
    menu.appendChild(option);
}

- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const menu = document.createElement('div');
document.body.appendChild(menu);
for (const element of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.innerHTML = `<h2>${element.title} - ${element.monthDuration} month</h2>`;
    menu.appendChild(block);
}

- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    const block = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    block.classList.add('item');
    h1.classList.add('heading')
    h1.innerText = element.title;
    p.innerText = element.monthDuration;
    p.classList.add('description');
    block.appendChild(h1);
    block.appendChild(p);
    document.body.appendChild(block);
}

*/
