"use strict";
/*У нас есть класс Clock. Сейчас он выводит время каждую секунду.
Создайте новый класс ExtendedClock, который будет наследоваться от Clock 
и добавьте параметр precision – количество миллисекунд между «тиками». 
Установите значение в 1000 (1 секунда) по умолчанию.
Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.*/
import { Clock } from "./Clock_(9-2-2).js";

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000
});

lowResolutionClock.start();