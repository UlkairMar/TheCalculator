const string1 = document.querySelector('#str1');
const string2 = document.querySelector('#str2');
const string3 = document.querySelector('#str3');
const string4 = document.querySelector('#str4');
const string5 = document.querySelector('#str5');

const number1 = document.querySelector('#one');
number1.onclick = function (){
    string1.textContent = string1.textContent + '1';
}
const number2 = document.querySelector('#two');
number2.onclick = function (){
    string1.textContent = string1.textContent + '2';
}
const number3 = document.querySelector('#tree');
number3.onclick = function (){
    string1.textContent = string1.textContent + '3';
}
const number4 = document.querySelector('#four');
number4.onclick = function (){
    string1.textContent = string1.textContent + '4';
}
const number5 = document.querySelector('#five');
number5.onclick = function (){
    string1.textContent = string1.textContent + '5';
}
const number6 = document.querySelector('#six');
number6.onclick = function (){
    string1.textContent = string1.textContent + '6';
}
const number7 = document.querySelector('#seven');
number7.onclick = function (){
    string1.textContent = string1.textContent + '7';
}
const number8 = document.querySelector('#eight');
number8.onclick = function (){
    string1.textContent = string1.textContent + '8';
}
const number9 = document.querySelector('#nine');
number9.onclick = function (){
    string1.textContent = string1.textContent + '9';
}
const number0 = document.querySelector('#zero');
number0.onclick = function (){
    string1.textContent = string1.textContent + '0';
}
const dot = document.querySelector('#dot');
dot.onclick = function (){
    if(string1.textContent === ''){
        string1.textContent = string1.textContent + '0';
    }
    let isExist = false;
    for(let i = 0;i < string1.textContent.length;i++){
        if (string1.textContent[i] ==='.'){
            isExist = true;
        }
    }
    if(!isExist){
        string1.textContent = string1.textContent + '.';
    }
}

const plus = document.querySelector('#plus')
plus.onclick = function (){
    if(check()){
        stringsTwisting();
        string1.textContent = string1.textContent + '+';
        stringsTwisting();
    }
}
const subtract = document.querySelector('#subtract')
subtract.onclick = function (){
    if(check()){
        stringsTwisting();
        string1.textContent = string1.textContent + '-';
        stringsTwisting();
    }
}
const multiply = document.querySelector('#multiply')
multiply.onclick = function (){
    if(check()){
        stringsTwisting();
        string1.textContent = string1.textContent + '*';
        stringsTwisting();
    }
}
const divide = document.querySelector('#divide')
divide.onclick = function (){
    if(check()){
        stringsTwisting();
        string1.textContent = string1.textContent + '/';
        stringsTwisting();
    }
}

const summary = document.querySelector('#summary');
summary.onclick = function (){
    if(checkForResult()){
        let first = Number(string3.textContent);
        let second = Number(string1.textContent);
        let operator = string2.textContent;
        let result;
        switch (operator){
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                if(second === 0){
                    result = 'Dividing by zero is illegal!!!';
                    break;
                }
                else{
                    result = first / second;
                    break;
                }
            default:
                result = second;
        }
        if(result === 'Dividing by zero is illegal!!!'){
            clearAll();
            string3.textContent = result;
        }
        else{
            result = String(result);
            stringsTwisting();
            string1.textContent = '=';
            stringsTwisting();
            string1.textContent = result;
        }
    }
}

const clear = document.querySelector('#clear');
clear.onclick = function (){
    clearAll();
}

function  clearAll(){
    string5.textContent = "";
    string4.textContent = "";
    string3.textContent = "";
    string2.textContent = "";
    string1.textContent = "";

}

function stringsTwisting(){
    string5.textContent = string4.textContent;
    string4.textContent = string3.textContent;
    string3.textContent = string2.textContent;
    string2.textContent = string1.textContent;
    string1.textContent = "";
}

function check(){
    let is = true;
    switch(string2.textContent) {
        case '+':
            is = false;
            break;
        case '-':
            is = false;
            break;
        case '*':
            is = false;
            break;
        case '/':
            is = false;
            break;
        default:
            break;
    }
    switch(string1.textContent) {
        case '':
            is = false;
            break;
        default:
            break;
    }
    return is;
}

function checkForResult(){
    let is;
    switch(string1.textContent) {
        case '':
            is = false;
            break;
        default:
            is = true;
    }
    return is;
}