"use strict";
//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(x, n) {
  if (n >= 1) {
    let res = x**n;
    return res;
  } else {
    return 'Некорректная степень';
  }
}

let a = prompt('Введите число');
let b = prompt('Введите степень');
alert( pow(a, b) );