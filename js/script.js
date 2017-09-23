//Задание 1. 
//Пользователь вводит год рождения в input. 
//Пользователь может ввести год рождения в двух форматах: 
//1988 или 02 (имеется ввиду 2002). 
//Программа должна вывести количество лет которое исполнилось пользователю. 

document.getElementById('btn1').onclick = fun1;

function fun1() {
    var a = document.getElementById('inp1').value;
    a = parseInt(a);
    var b;

    if (a < 2016) {
        b = 2017 - a;
        document.getElementById('out1').innerHTML = 'age _ ' + b;
    }
    if (a < 16) {
        b = 17 - a;
        document.getElementById('out1').innerHTML = 'age _ ' + b;
    }
}

//Задание 2. 
//Пользователь вводит 2 числа. 
//Найти и вывести максимальное из данных двух чисел. 
//Учтите вариант равенства чисел.

document.getElementById('btn2').onclick = fun2;

function fun2() {
    var a2 = document.getElementById('inp01').value;
    a2 = parseInt(a2);
    var b2 = document.getElementById('inp02').value;
    b2 = parseInt(b2);

    if (a2 > b2) {
        document.getElementById('out2').innerHTML = 'the largest number _ ' + a2;
    } else if (a2 < b2) {
        document.getElementById('out2').innerHTML = 'the largest number _ ' + b2;
    } else {
        document.getElementById('out2').innerHTML = 'the numbers are the same';
    }
}

//Задание 3. 
//В первом подъезде номера квартир от 1 до 20, 
//во втором от 21 до 64,  в третьем от 65 до 80. 
//Пользователь вводит номер квартиры, необходимо указать в каком она подъезде. 

document.getElementById('btn3').onclick = fun3;

function fun3() {
    var a3 = document.getElementById('inp3').value;
    a3 = parseInt(a3);
    var b3 = document.getElementById('out3');
    if (a3 > 80) {
        b3.innerHTML = 'not a real number';
    } else if (a3 > 64) {
        b3.innerHTML = '3 entrance';
    } else if (a3 > 20) {
        b3.innerHTML = '2 entrance';
    } else if (a3 > 0) {
        b3.innerHTML = '1 entrance';
    }
}

//Задача 4. Два поля ввода: Логин и пароль. Есть 3 пользователя:
//ivan ->  333
//ssss-> 666
//gibs ->0000
//Если введен правильный логин и пароль вывести “Добро пожаловать”, 
//в противном случае - вывести “ошибка”.

document.getElementById('btn4').onclick = fun4;

function fun4() {
    var a4 = document.getElementById('inp41').value;
    var b4 = document.getElementById('inp42').value;
    var c4 = document.getElementById('out4');
    if (a4 == 'ivan' && b4 == '333') {
        c4.innerHTML = 'Добро пожаловать';
    } else if (a4 == 'ssss' && b4 == '666') {
        c4.innerHTML = 'Добро пожаловать';
    } else if (a4 == 'gibs' && b4 == '0000') {
        c4.innerHTML = 'Добро пожаловать';
    } else {
        c4.innerHTML = 'ошибка';
    }
}

//Задание 5. 
//Пользователь вводит 3 числа. 
//Найти и вывести максимальное из данных трех чисел.

document.getElementById('btn5').onclick = fun5;

function fun5() {
    var a5 = document.getElementById('inp51').value;
    a5 = parseInt(a5);
    var b5 = document.getElementById('inp52').value;
    b5 = parseInt(b5);
    var c5 = document.getElementById('inp53').value;
    c5 = parseInt(c5);
    var m5 = document.getElementById('out5');
    if (a5 > b5 && a5 > c5) {
        m5.innerHTML = 'the largest number _ ' + a5;
    } else if (a5 < b5 && b5 > c5) {
        m5.innerHTML = 'the largest number _ ' + b5;
    } else if (a5 < c5 && b5 < c5) {
        m5.innerHTML = 'the largest number _ ' + c5;
    } else {
        m5.innerHTML = 'the numbers are the same';
    }

}

//Задачи на цикл for
//
//1.	Вывести четные числа от 0 до 101.

var a51 = document.getElementById('out51');
for (var i = 0; i <= 101; i = i + 2) {
    a51.innerHTML += i + ' ';
}

//2.	Вывести числа в следущей последовательности: 200 199 198 ... 0.

var a52 = document.getElementById('out52');
for (var i = 200; i >= 0; i = i - 2) {
    a52.innerHTML += i + ' ';
}

//3.	Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

var a53 = document.getElementById('out53');
for (var i = 0, b53 = 0; i <= 100; i++) {
    b53 = i + b53;
}
a53.innerHTML += b53;

//4.	Задайте два input. В первый вводится число, во второе его степень. 
//С помощью цикла возведите число в степень. Напечатайте результат. 

document.getElementById('btn54').onclick = function () {
    var num = document.getElementById('inp541').value;
    var stp = document.getElementById('inp542').value;
    //num - введенное число
    //stp - степень число
    var rez = 1;
    for (i = 0; i < stp; i++) {
        rez *= num;
        document.getElementById('out54').innerHTML = rez;
    }
}

//5.	С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
//Т.е.: 
//1*7=7  
//2*7=14 
//3*7=21...

for (var i = 1, r = 1; i < 10; i++) {
    r = i * 7;
    document.getElementById('out55').innerHTML += i + ' * 7' + ' = ' + r + '<br>';
}

//6.	С помощью цикла вывести произведение чисел от 1 до 50.

for (var i = 1, q = 1; i <= 50; i++) {
    q *= i;
    document.getElementById('out56').innerHTML += q;
}

//7.	Выведите с помощью цикла коды спецсимволов от 1000 до 2000. 
//Напомню, что спецсимвол получается комбинацией &#число;  Например &#1222;


var sum = document.getElementById('out57');
for (var i = 1000; i <= 2000; i++) {
    sum.innerHTML += '&#' + i;
}
