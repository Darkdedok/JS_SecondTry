/*
Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

    - Напишіть код,  котрий :
-- отримує текст з параграфа з id "content"
-- отримує текст з блоку з id "rules"
-- замініть текст параграфа з id 'content' на будь-який інший
-- замініть текст параграфа з id 'rules' на будь-який інший
-- змініть кожному елементу колір фону на червоний
-- змініть кожному елементу колір тексту на синій
-- отримати весь список класів елемента з id=rules і вивести їх в console.log
-- поміняти колір тексту у всіх елементів fc_rules на червоний

const idContent = document.getElementById('content');
console.log(idContent.textContent);
const idRules = document.getElementById('rules');
console.log(idRules.textContent);
idContent.innerText = 'some text';
idRules.innerText = 'another text';
const divkas = document.getElementsByTagName('div');
for (const divka of divkas) {
    divka.style.backgroundColor = 'red';
    divka.style.color = 'blue';
}
const pshkas = document.getElementsByTagName('p');
for (const pshka of pshkas) {
    pshka.style.backgroundColor = 'red';
    pshka.style.color = 'blue';
}
const uls = document.getElementsByTagName('ul');
for (const ul of uls) {
    ul.style.backgroundColor = 'red';
    ul.style.color = 'blue';
}
//OR
//document.body.style.backgroundColor = 'red';
console.log(idRules.classList);
const fcRulesClass = document.getElementsByClassName('fc_rules');
for (const {style} of fcRulesClass) {
    style.color = 'red';
}

Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
a) додає клас з назвою групи, елементу з ід main_header
b) робить шириниу елементу ul 400px
c) робить шириниу всіх елементів з класом linkList шириною 50%
d) отримує текст який зберігається в елементі з класом listElement2
e) отримує всі елементи li та змінює ім колір фону на сірий
f) отримує всі елементи 'a' та додає їм клас anchor
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
*/

const march2022 = document.getElementById('main_header');
march2022.classList.add('march2022');
const ulElements = document.getElementsByTagName('ul');
for (const {style} of ulElements) {
    style.width = '400px';
}
const linkList = document.getElementsByClassName('linkList');
for (const {style} of linkList) {
    style.width = '50%';
}
const listElement2Content = document.getElementsByClassName('listElement2');
console.log(listElement2Content[0].textContent);
//OR
for (const {textContent} of listElement2Content) {
    console.log(textContent);
}
const allLiElements = document.getElementsByTagName('li');
for (const {style} of allLiElements) {
    style.backgroundColor = 'grey';
}
const allAElements = document.getElementsByTagName('a');
for (const allAElement of allAElements) {
    allAElement.classList.add('anchor');
    allAElement.classList.add(`element_${allAElement.textContent}`)
    if (allAElement.textContent === 'link3'){
        allAElement.style.fontSize = '40px';
    }
}
const bColor = prompt('Enter color');
const sub_headers = document.getElementsByClassName('sub-header')
for (const sub_header of sub_headers) {
    sub_header.style.backgroundColor = bColor;
    if (sub_header.textContent === 'content 2 segment'){
        sub_header.style.color = bColor;
    }
}
const text = prompt('Enter text')
const content_1Class = document.getElementsByClassName('content_1');
for (const content1Class of content_1Class) {
    content1Class.textContent = text;
}
const allPelements = document.getElementsByTagName('p');
for (const allPelement of allPelements) {
    allPelement.style.padding = '20px'
}