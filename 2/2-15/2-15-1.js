"use strict";
/*Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
Переписать функцию, используя ? и ||  - 2 варианта решения*/

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}