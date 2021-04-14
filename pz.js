//Cоздать функцию, которая возвращает true или false,
//в зависимости от того, может ли сумма любых двух чисел 
//из массива быть равной заданному значению.
//Другими словами, есть ли в массиве два целых числа x и y,
//которые при сложении равны указанному значению ?
//Пример А
//Если нам дали массив [1, 2, 4, 9] и значение 8,
//функция вернет false, потому что никакие два числа
//из массива не могут дать 8 в сумме.
//Пример Б
//Но если это массив [1, 2, 4, 4] и значение 8, 
//функция должна вернуть true, потому что 4 + 4 = 8.

function sumEquality(array, num) {
    for (var i = 0; i < array.length; i++){ 
        for (var j = i + 1; j < array.length; j++){  
            if (array[i] + array[j] === num) {
                return true;
            }
        }
    }
    return false;
}
console.log(sumEquality([1, 2, 3, 4], 8));

//2) Напишите функцию, которая преобразует глубокий массив 
//в одномерный.Не используйте array.flat()
//Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

//const arr = [1, 2, [3, 4, [5, 6]]];

/*function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};
flatDeep(arr, Infinity);

function walkLeaves(arr, fn)
{
    for (var i = 0; i < arr.length; ++i) {
        if (typeof arr[i] == 'object' && arr[i].length) { // simple array check
            walkLeaves(arr[i], fn);
        } else {
            fn(arr[i], i); // only collect leaves
        }
    }
}
console.log(walkLeaves(arr, Infinity));*/

function spl(arr) {
    var result = [];
    var len = arr.length;
    for (var i=0; i<len; i+= len) {
        result.push(arr.slice(i, i + len));
        //console.log(result);
    }
    return result;
    console.log(result);
}
spl([1, 2, [3, 4, [5, 6]]])


//3)Напишите функцию, которая разделяет массив на части заданного размера.
//Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //массив, можно использовать массив объектов
let size = 2; //размер подмассива
let obv = []; //массив в который будет выведен результат.
var newArray;
for (let i = 0; i < Math.ceil(array.length/size); i++){
    obv[i] = array.slice((i * size), (i * size) + size);
}
console.log(obv);


//4) Напишите функцию, которая поверхностно сравнивает два объекта.
//Ожидаемый результат: True если объекты идентичны, false если объекты разные 
//({ a: 1, b: 1 }, { a: 1, b: 1 }) => true