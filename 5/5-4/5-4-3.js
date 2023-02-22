"use strict";
/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++);
    currSum += arr[i];
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}