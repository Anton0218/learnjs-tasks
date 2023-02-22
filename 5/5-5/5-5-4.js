"use strict";
/*let arr = [5, 2, 1, -10, 8];
... ваш код для сортировки по убыванию*/

let arr = [5, 2, 1, -10, 8];

function sortMin(arr) {
  return arr.sort((a, b) => {
    return b-a;
  });
}

console.log(sortMin(arr));