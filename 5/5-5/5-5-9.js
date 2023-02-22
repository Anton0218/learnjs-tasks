"use strict";
/*Напишите функцию sortByAge(users), которая принимает массив 
объектов со свойством age и сортирует их по нему.*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

console.log(sortByAge(arr));

function sortByAge(arr) {
  return arr.sort( (a, b) => {
    return a.age - b.age;
  });
}