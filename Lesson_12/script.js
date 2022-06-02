/*
1.
Отримати з цього ресурсу відповідь, та вивести в документу об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts

const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.append(mainDiv);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response  => response.json())
    .then(value => {
        for (const valueKey of value) {
            const element = document.createElement('div');
element.innerHTML = `
<h3>User id = ${valueKey.userId}</h3>
<h4>ID = ${valueKey.id}</h4>
<h5>Title = ${valueKey.title}</h5>
<h5>Body = ${valueKey.body}</h5>
`;
element.classList.add('post');
mainDiv.append(element);

        }
    });


    2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments
*/

