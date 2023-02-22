'use strict';

let num = prompt('Введите число', 0); //Предполагается, что пользователь вводит только числа.

if (num > 0) {
  alert(1);
} else if (num == 0) {
  alert(0);
} else if (num < 0) {
  alert(-1);
}