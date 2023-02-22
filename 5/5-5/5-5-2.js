"use strict";
/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.*/

function filterRange(arr, a, b) {
  let res = [];
  for (let elem of arr) {
    if (elem >= a && elem <= b) {
      res.push(elem);
    }
  }
  return res;
}

// 2ое решение 

function filterRange(arr, a, b) {
  return arr.filter(elem => (a <= elem && elem <= b));
}