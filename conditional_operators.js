module.exports = { conditionalOperators, coordinates, Sum_3_Positive, Max, multip, sum, rating }

// task 1 'Если а – четное посчитать а*б, иначе а+б'
function conditionalOperators(a, b) {
    if (a % 2 !== 0) {
        return (a + b);
    }
    else {
        return (a * b);
    }
}
//conditionalOperators(4, 9);
//module.exports = { conditionalOperators }

//task 2 'Определить какой четверти принадлежит точка с координатами (х,у)'
function coordinates(x, y) {
    if (x < 0 && y > 0) {
        return('1 quarter'); // первая четверть 
    }
    if (x > 0 && y > 0) {
        return('2 quarter'); // вторая четверть 
    }
    if (x > 0 && y < 0)
    {
        return('3 quarter'); // третья четверть 
    }
    if (x < 0 && y < 0) {
        return('4 quarter'); // четвертая четверть 
    }
    if (x === 0 || y === 0) {
        return('no quarter');
    }
}
//coordinates(2, -3) // это решение не охватывает точки на оси Х или Y отдельно или точку (0, 0);
//module.exports = { coordinates }

//task 3 'Найти суммы только положительных из трех чисел'
function Sum_3_Positive(a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        return(a + b + c);
    }
    else {
        return('pechal');
    }
}
//Sum_3_Positive(5, -6, 0);

// task 4 'Посчитать выражение (макс(а*б*с, а+б+с))+3'
function Max(multip, sum) {
    if (multip >= sum) {
        return(multip + 3);
    }
    else {
        return(sum + 3);
    }
}
function multip(a, b, c) {
    return (a * b * c);
}
function sum(a, b, c) {
    return (a + b + c);
}
//Max(5, 3, 1); // если честно, я до конца не поняла что от меня хотят

// Task 5 'Написать программу определения оценки студента по его рейтингу, на основе следующих правил'
function rating(value) {
    if (value > 0 && value <= 19) {
        return('rating: F');
    }
    if (value >= 20 && value <= 39) {
        return('rating: E');
    }
    if (value >= 40 && value <= 59) {
        return('rating: D');
    }
    if (value >= 60 && value <= 74) {
        return('rating: C');
    }
    if (value >= 75 && value <= 89) {
        return('rating: B');
    }
    if (value >= 90 && value <= 100) {
        return('rating: A');
    }
}
//rating(88);