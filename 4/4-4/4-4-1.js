"use strict";
/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

let calculator = {
  values: [],
  read() {
    let num1 = +prompt('Введите 1ое число');
    let num2 = +prompt('Введите 2ое число');
    this.values.push(num1, num2);
  },
  sum() {
    let sum = 0;
    for (let elem of this.values) {
      sum += elem;
    }
    return sum;
  },
  mul() {
    let prod = 1;
    for (let elem of this.values) {
      prod *= elem;
    }
    return prod;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );