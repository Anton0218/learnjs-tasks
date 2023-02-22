"use strict";
/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/

function copySorted(arr) {
  return arr.slice().sort();
}
