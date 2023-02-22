"use strict";
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  if (str == '' || str === null) {
    return str;
  } else {
    return str = str[0].toUpperCase() + str.slice(1);
  }
}

alert( ucFirst("вася") );