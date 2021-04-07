function Stars_1(){
    var result =''
    for(var j = 1; j <= 7; j++){    
        for(var i = 1; i <= 7; i++) {
            result += ' * ';
        }
        result += '\n';
    }
    return result;
}
console.log(Stars_1())

function Stars_2() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (j === 1 || j === 7 || i === 1 || i === 7) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_2())

function Stars_3() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (j === 1 || (j === 8 - i) || i === 1) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_3())

function Stars_4() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (j === 1 || (i === j) || i === 7) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_4())

function Stars_5() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (j === 7 || (i === 8 - j) || i === 7) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_5())

function Stars_6() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (j === 7 || (i ===  j) || i === 1) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_6())

function Stars_7() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if ((i ===  j) || (i === 8 - j)) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_7())

function Stars_8() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (((i === j) && j < 5) || (((i === 8 - j) && j > 4) || i === 1 )) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_8())

function Stars_9() {
    var result =''
    for(var i = 1; i <= 7; i++){    
        for (var j = 1; j <= 7; j++) {
            if (((i === j) && j > 4) || (((i === 8 - j) && j < 5) || i === 7 )) {
                result += ' * ';
            }else {
                result += '   ';
            }
        } 
        result += '\n';
    }
    return result;
}
console.log(Stars_9())

//урааа! 