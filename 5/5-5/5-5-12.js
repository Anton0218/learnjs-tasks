"use strict";
/*Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.*/

function unique(arr) {
  let uniqueArr = new Set(arr);
  return [...uniqueArr];
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );