"use strict";
/*Напишите функцию checkSpam(str), возвращающую true,
если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:*/

function checkSpam(str) {
  let strLow = str.toLowerCase();
  if (strLow.includes('viagra') || strLow.includes('xxx')) {
    return true;
  } else return false;
}

console.log(checkSpam('Low and HIGHT xXX'));
console.log(checkSpam('vIAGra and etc'));
console.log(checkSpam('Just a word'));