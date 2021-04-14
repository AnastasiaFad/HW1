const { returnStatement } = require("@babel/types");
module.exports = {  sumChetny, isPrime, getPodbor, getBinary, isFactorial, Sum, Mirror }
// task 1 "Найти сумму четных чисел и их количество в диапазоне от 1 до 99"
function sumChetny(number) {
    var sum = 0;
    var count = 0;
    for (var i = 2; i < number; i += 2) {
        sum += i;
        count++;
    }
    return [sum, count];
}
//sumChetny(100);

// task 2 'Проверить простое ли число? 
//(число называется простым, если оно делится только само на себя и на 1) '
function isPrime(num) {
    var prostoe = true;
    if (num < 1 || num % 1 !== 0) { // проверка на отрицательные или дробные
        return("Некорректно");
    }
    else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) { //  25/5 = 5.0 остаток 0
                prostoe = false;
            }
        }
        return(prostoe);
    }
}
//isPrime(-1.5)


// TASK 3 'Найти корень натурального числа с точностью до целого
//(рассмотреть вариант последовательного подбора и метод бинарного поиска)'
//Math.sqrt() возвращает квадратный корень числа, то есть
// натурально - больше 0 и целое 

// вариант последовательного подбора 
function getPodbor(num) {
    var count = 1;
    for (var i = 1; i < num; i++){ // ... 3*3 = 9, ... ,4*4 = 16;
        count = i * i; // 3 // 4
        if (count === num) {
            return(i); 
        }
        if (num < count) { //10<9 // 10<16
            return(i - 1); 
        }
    }
}
//getPodbor(55);

function getBinary(num) { //не работает !
    var count = 1;
    //binary_num = num / 2;   //28/2 = 14
    loop1: for (count = num / 2; count * count >= num; count /= 2){ // 28/2 = 14
        if (count * count === num) {
            // continue loop1;
            // console.log(count);
        }
        //console.log(count);
    }
    // if (count * count === num) {
    //        console.log(count);
    //}

}
//getBinary(28)

// task 4 'Вычислить факториал числа n. n! = 1*2*…*n-1*n;'
function isFactorial(n) {
    var count = 1;
    for (var i = 1; i <= n; i++){
        count *= i;
    }
    return(count);
}
//isFactorial(4);

// Task 5 Посчитать сумму цифр заданного числа
function Sum(num) {
    var count = 0;
    var getStringtoArr = Array.from(num);
    for (var i = 0; i < getStringtoArr.length; i++){
        count += +getStringtoArr[i]; // счетчик 
    }
    return(count);
    //console.log(getStringtoArr); //наш массив 
}
//Sum('954') 

// Task 6 'Вывести число, которое является зеркальным отображением 
//последовательности цифр заданного числа, 
//например, задано число 123, вывести 321.'
function Mirror(num) {    
    var mirror = 0;
    for(; num; num = Math.floor(num / 10)) { //Math.floor - округляет до целых; // 123/10 =12.3 => 12
        mirror *= 10; 
        mirror += num % 10; 
    }
    return(mirror)
}
//Mirror(123);
