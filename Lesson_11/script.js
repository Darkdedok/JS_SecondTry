/*
-створити форму з інпутами для name та age.
    При відправці форми записати об'єкт в localstorage

const name = document.createElement('input');
name.type = 'string';
name.placeholder= 'name';
const age = document.createElement('input');
age.type = 'number';
age.placeholder= 'age';
const button = document.createElement('input');
button.type = 'button';
button.value = 'send';
document.body.append(name, age, button);

button.onclick = (e) => {
    let user = {name:name.value, age:age.value};
    localStorage.setItem('name', name.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('user',JSON.stringify(user));
};

-створити форму з інпутами для model,type та volume автівки.
    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const model = document.createElement('input');
model.type = 'string';
model.placeholder = 'model';
const type = document.createElement('input');
type.type = 'string';
type.placeholder = 'type';
const volume = document.createElement('input');
volume.type = 'string';
volume.placeholder = 'volume';
const button = document.createElement('input');
button.type = 'button';
button.value = 'send';
document.body.append(model, type, volume, button);
button.onclick = (e) => {
    let auto = [{model: model.value, type: type.value, volume: volume.value}];
    localStorage.setItem(`Auto ${model.value}`, JSON.stringify(auto));
};

    */
