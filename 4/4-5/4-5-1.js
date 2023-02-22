"use strict";
/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.*/

function Calculator() {
  this.values = [];
  this.read = function () {
    let num1 = +prompt('Введите 1ое число');
    let num2 = +prompt('Введите 2ое число');
    this.values.push(num1, num2);
  }
  this.sum = function () {
    let sum = 0;
    for (let elem of this.values) {
      sum += elem;
    }
    return sum;
  }
  this.mul = function () {
    let prod = 1;
    for (let elem of this.values) {
      prod *= elem;
    }
    return prod;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
