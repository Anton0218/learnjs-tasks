"use strict";
/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.*/

function formatDate(date) {
  let now = new Date();
  let diff = Math.floor((now - date) / 1000);

  if (diff < 1) {
    return 'Прямо сейчас';
  } else if (diff < 60) {
    return `${diff} сек. назад`;
  } else if (diff < (60*60)) {
    let mins = diff / 60;
    return `${mins} мин. назад`;
  } else {
    let yearNow = now.getFullYear();
    let monthNow = now.getMonth();
    let dateNow = now.getDate();
    let hoursNow = now.getHours();
    let minutesNow = now.getMinutes();
    
    return `${getZero(dateNow)}.${getZero(monthNow)}.${yearNow} ${getZero(hoursNow)}:${getZero(minutesNow)}`;
  }

  function getZero(elem) {
    let str = String(elem);
    if (str.length < 2) {
      return str = '0' + str;
    } else { return str; }
  }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"


console.log(formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );