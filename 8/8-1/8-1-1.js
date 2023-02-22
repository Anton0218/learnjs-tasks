"use strict";
/* У нас есть объекты.
С помощью свойства __proto__ задайте прототипы так, 
чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head.
Например, pockets.pen должно возвращать значение 3 (найденное в table), 
а bed.glasses – значение 1 (найденное в head).*/

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen); // значение 3 (найденное в table)
console.log(bed.glasses); // значение 1 (найденное в head)
console.log(table.money); // undefined