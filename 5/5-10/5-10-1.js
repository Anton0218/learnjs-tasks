"use strict";
/*У нас есть объект:
let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)*/

let user = {
  name: "John",
  years: 30
};

let {name, years, isAdmin = 'false'} = user;

console.log(name);
console.log(years);
console.log(isAdmin);