module.exports = { dayOfWeek, sumAB, wordNum}

// Task 1
//'Получить строковое название дня недели по номеру дня. '
// var dayOfWeek = function (num) {
//     switch (num) {
//         case 1: return('Monday'); 
//         case 2: return('Tuesday'); 
//         case 3: return('Wednesday'); 
//         case 4: return('Thursday'); 
//         case 5: return('Friday'); 
//         case 6: return('Saturday'); 
//         case 7: return('Sunday'); 
//     }
//     if (num > 7) {
//         return('Такого дня не существует...');
//     }
// }
// Day_of_Week(9);
function dayOfWeek(number) {
    if (typeof number !== "number") {
        return false;
    }
    if (number < 1 || number > 7) {
        return "wrong input, in week only 7 days";
    }
    var week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return week[number - 1];
    }

// Task 2 'Найти расстояние между двумя точками в двухмерном декартовом пространстве.'
// AC(x1,x2)  BC(y1,y2)

function sumAB(x1, x2, y1, y2) {
    AC = (x2 - x1);
    BC = (y2 - y1);
    AB = Math.sqrt((AC * AC) + (BC * BC));
    return(AB);
}
//sumAB(-1, 3, 2, 9)

// TASK 3 'Вводим число(0-999), получаем строку с прописью числа.'
function wordNum(num) {
    var Ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
    'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
    'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
    
    var Tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
    'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
    
    var Hundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
    'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
    
    if (num < 0 || num > 999) {
        console.log('Некорректный ввод');
    }
    else if (num === 0) {
        console.log('Ноль');
    }
    else {
        if (num < 20)  console.log(ones[num])

    }
}
//Word_num(777)

/*function numsConvertToWord(num) {
    var result = null
    var numArr = divideNum(num)

    else {
    if (num < 20) result = ones[num]
    else if (num < 100) result = tens[numArr[0]] + ' ' + ones[numArr[1]]
    else if (numArr[1] > 1) result = hundreds[numArr[0]] + ' ' + tens[numArr[1]] + ' ' + ones[numArr[2]]
    else {
        var newNum = numArr[1].toString() + numArr[2]
        result = hundreds[numArr[0]] + ' ' + ones[+newNum]
        }
    }
    return result
}*/

