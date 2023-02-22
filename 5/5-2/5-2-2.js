"use strict";
/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, 
пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, 
отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

function readNumber() {
  let num = prompt('Введите число');
  if (!isFinite(num)) {
    readNumber();
  } else if (num == '' || num == null) {
    return null;
  } else {
    return Number(num);
  }
}

console.log(readNumber());