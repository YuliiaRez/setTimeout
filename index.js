'use strict'
/*Напишите функцию printNumbers(from, to, interval), которая последовательно выводит
 в консоль целые числа, начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
Реализуйте первый или *оба варианта решения:
- Используя setInterval.*/

function printNumbers(from, to, interval = 100) {
    let num = from;

    let timer = setInterval(function () {
        console.log(Math.trunc(parseInt(num)));
        if (num >= to) {
            clearInterval(timer);
        }
        num++;
    }, interval);
}
printNumbers(4/3, 8, 400);

/*- *Используя рекурсивный setTimeout (https://learn.javascript.ru/settimeout-setinterval#rekursivnyy-settimeout).*/


function printNumbersRec(from, to, interval = 100) {
    let num1 = from;

    setTimeout(function launching() {
        if (num1 <= to) {
            setTimeout(launching, interval);
            console.log(Math.trunc(parseInt(num1)));
        }
        num1++;
    }, interval);
}
//printNumbersRec(0.25, 8, 100);