"use strict";
/*Напишите функцию getAverageAge(users), которая принимает массив объектов 
со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
  let sum = users.reduce((acc, user) => acc + user.age, 0);
  let avSum = sum / users.length;
  return avSum;
}

console.log(getAverageAge(arr));