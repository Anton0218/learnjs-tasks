"use strict";
/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.*/

function camelize(str) {
  let arr = str.split('-');
  arr.map((elem, index) => {
    if (index > 0) {
      arr[index] = elem[0].toUpperCase() + elem.slice(1);
    }
  });
  return arr.join('');
}

console.log(camelize('my-short-string'));