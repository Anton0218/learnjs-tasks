"use strict";
/*Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, 
не повторяющихся значений массива arr.
Используйте Set для хранения уникальных значений.*/

function unique(arr) {
  let uniqueArr = new Set(arr);
  return [...uniqueArr];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


console.log( unique(values) );