// Task 1 - 5
function Min(array) {
    var min = array[0];
    var max = array[0];
    var index_min = 0;
    var index_max = 0;
    var sum = 0;
    for (var i = 0; i < array.length; i++){ 
        if (array[i] < min) { //'Найти минимальный элемент массива'
            min = array[i];
            index_min = i;  //Найти индекс минимального элемента массива
        }
        if (array[i] > max) { //'Найти максимальный элемент массива'
            max = array[i];
            index_max = i;  //Найти индекс максимального элемента массива 
        }
        if (i % 2 !== 0) { //Посчитать сумму элементов массива с нечетными индексами
            sum += array[i];
        }
    }
    console.log("Min: ", min, 'index min: ', index_min);
    console.log("Max: ", max, 'index max: ', index_max);
    console.log('Сумма нечетных индексов: ', sum)
}
Min([2, 4, 0, 1, 8, 9, -4]);

// Task 6 - 7 'Сделать реверс массива (массив в обратном направлении)'
function Revers(array) {
    var count = 0;
    var revArray = []; // сюда будем записывать новый массив
    for (var i = 0; i < array.length; i++) {
        revArray[i] = array[array.length - i - 1]; // с одратной стороны нашего массыва записыапем в новый
        
    }
    console.log(revArray);

    if (array.length % 2 === 0) { //Посчитать количество нечетных элементов массива
        count = array.length / 2;
    }
    else {
        count = Math.floor(array.length / 2); // отбрасываем десятые 
    }
    console.log('Кол-во нечетных индексов: ', count)
}
Revers([2, 4, 0, 1, 8, 9]);

// Task 8 Поменять местами первую и вторую половину массива, например, для массива 
//1 2 3 4, результат 3 4 1 2
function Revers_Ops(array) {
    var rev1 = Math.floor(array.length / 2),
    rev2 = array.length - rev1,
    newArr = []
    for (i = 0; i < rev2; i++) {
        newArr[i] = array[i + rev1]
    }
    for (i = 0; i < rev1; i++) {
        newArr[i + rev2] = array[i]
    }
    console.log(newArr);
}
Revers_Ops([2, 4, 0, 1, 8, 9])

// Task 9 Отсортировать массив 
function bubbleSort(array) {
    for (var i = 0; i < array.length; i++){
        var elem = false;
        for (var j = 0; j < array.length; j++){
            if (array[j] > array[j + 1]) {
                var swap = array[j]; // присваеваем переменной swap текущее значение j
                array[j] = array[j + 1]; //перезаписываем в j значение j+1
                array[j + 1] = swap; //перезаписываем в swap новое значение;
                elem = true;
                //console.log(array)
            }
        }
        if (!elem) break;
    }
    //console.log(array)
}
bubbleSort([2, 4, 0, 1, 8, 9])

function selectSort(array) {
    var min = 0;
    for (var i = 0; i < array.length; i++){
        var t_f = false;
        for (var j = 0; j < array.length; j++){
            if (array[j] > array[j + 1]) {
                min = array[j + 1]; // min value
                array[j + 1] = array[j]; // j+1 <= j
                array[j] = min;
                t_f = true;
            }
            //console.log(array)
        }
        if (!t_f) break;
    }
    console.log(array);
}
selectSort([2, 4, 0, 1, 8, 9])

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Выбор первого элемента в несортированном подмассиве
            let current = inputArr[i];
            // Последний элемент отсортированного подмассива
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) { 
                inputArr[j+1] = inputArr[j];
                j--; //уменьшаем неотсортированный массив
            }
            inputArr[j + 1] = current;
            //console.log(inputArr);
        }
    //return inputArr;
    console.log(inputArr);
}
insertionSort([5, 2, 4, 6, 1, 3]);
//console.log(inputArr);

