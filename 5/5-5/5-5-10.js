"use strict";
/*Напишите функцию shuffle(array), которая перемешивает 
(переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов.*/

function shuffle(array) {
  let res = [];

  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  while (array.length > 0) {
    let random = getRandomIndex(0, array.length - 1);
    let elem = array.splice(random, 1)[0];
    res.push(elem);
  }

  return res;
}

console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));