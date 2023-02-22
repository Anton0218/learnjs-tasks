"use strict";
/*Добавьте всем функциям в прототип метод defer(ms), 
который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.*/

function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function (ms) {
  return (...args) => setTimeout(this, ms, ...args);
  };

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.