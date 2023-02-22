'use strict';
//Напишите код, который выводит все простые числа из интервала от 2 до n.

let num = 10;

labelI:
for (let i = 2; i <= num; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) {
      continue labelI;
    }  
  }

  alert(i); 
}
