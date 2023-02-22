"use strict";
/*Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, 
пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
  let arr = [];
  let sum = 0;
  let flag = true;

  while (flag) {
    let value = prompt('Введите число');
    if (!isFinite(value) || value === '' || value === null) {
      flag = false;
    } else {
      arr.push(value);
    }
  }

  for (let elem of arr) {
    sum += Number(elem);
  }
  return sum;  
}

console.log(sumInput());