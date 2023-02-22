"use strict";
/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

function getSecondsToday() {
  let now = new Date();
  let beginning = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

  let diff = Math.round((now - beginning) / 1000); 
  return diff;
}

console.log(getSecondsToday());
