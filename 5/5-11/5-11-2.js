"use strict";
/*Напишите функцию getWeekDay(date), показывающую день 
недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».*/

let date = new Date();

console.log(getWeekDay(date));

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}