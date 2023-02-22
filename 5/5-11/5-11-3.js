"use strict";
/*В Европейских странах неделя начинается с понедельника (день номер 1), 
затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.*/

let date = new Date();

console.log(getWeekDay(date));

function getWeekDay(date) {
  let days = ['7', '1', '2', '3', '4', '5', '6'];
  return days[date.getDay()];
}