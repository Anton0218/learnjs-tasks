"use strict";
/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
1) Реализуйте метод calculate(str), который принимает строку типа "1 + 2" 
в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -.

2) Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.*/

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) { //1ая часть
    let arrSplit = str.split(' ');
    let num1 = Number(arrSplit[0]);
    let method = arrSplit[1];
    let num2 = Number(arrSplit[2]);

    if (!isFinite(num1) || !isFinite(num2) || !this.methods[method]) {
      console.log('Неприемлемое выражение');
      return NaN;
    }

    return this.methods[method](num1, mun2);
  }

  this.addMethod = function(name, func) { //2 часть
    this.methods[name] = func;
  }
}