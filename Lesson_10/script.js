/*
- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

const button = document.getElementById('hideButton');
const text = document.getElementById('someText');
button.onclick = function (e) {
    someText.style.display === 'none' ? someText.style.display = '' : someText.style.display = 'none';
}

    - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const ageNumber = document.getElementById('age');
const check = document.getElementById('ageButton');
check.onclick = function (e){
    if (ageNumber.value < 18) {
        return alert('You are not adult');
    }
    alert('You are adult');
}

- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const sendInfo = document.getElementById('sendData');
const emailText = document.forms.emailText;
const passwordDate = document.forms.passwordDate;
let userInfo;
sendInfo.onclick = function (e){
    userInfo = {
        Email: emailText.email.value,
        Text: emailText.text.value,
        Password: passwordDate.password.value,
        Date: passwordDate.date.value
    }
    console.log(userInfo)
}


- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

    const inputOne = document.createElement('input');
inputOne.placeholder = 'rows';
const inputTwo = document.createElement('input');
inputTwo.placeholder = 'columns';
const inputThree = document.createElement('input');
inputThree.placeholder = 'inner text';
const button = document.createElement('button');
button.innerText = 'Calc';
document.body.append(inputOne, inputTwo, inputThree, button);
const table = document.createElement('table');
button.addEventListener('click', function () {
    table.innerHTML='';
    const tr = inputOne.value;
    const td = inputTwo.value;
    const inputText = inputThree.value;
    function calculateTable(tr, td, text) {
        document.body.append(table);
        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.innerText = text;
                td.style.border = '1px solid black';
                tr.appendChild(td);
            }
        }
    }
    calculateTable(tr, td, inputText);
})

    */


