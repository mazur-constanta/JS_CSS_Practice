"use strict";       // директива, работа в современном режиме

// УРОК 5. Переменные и строгий режим 
/*
let number = 5;

const leftBorderWidth = 1;

number = 10;
console.log(number);

const object = {
    a: 50
};

obj.a = 10;
console.log(obj);
// Прямых констант в JS не бывает.

console.log(name);
var name = 'Constance';

{
    let result = 50;
}

console.log(result);

{
    var result = 50;
}

console.log(result);
*/

// УРОК 6. Классификация типов данных в JS
/*
let number = 4.6;

console.log(-4/0);          // -Infinity
console.log('string' * 9);  //  NaN not a number

const person = "Alex";

const perone = '5';

const bool = true;          // false

console.log(something);     // Something is not defined - null

let und;
console.log(und);           // Undefined

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
}

console.log(obj.name);
console.log(obj['name']);   // Не желательно так писать, но работает

// Массив - частный случай объекта
//          0           1           2   3           4   5
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);
*/

// УРОК 7. Общение с пользователем (alert, confirm, prompt)
/*
alert('Hello!');

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Вам есть 18?", "18");
console.log(typeof(answer));

Вся инфа от пользователей будет в виде - строки. Prompt и т.д.

const answer2 = prompt("Вам есть 18?", "100");      // +prompt - динамическая типизация
console.log(answer2 + 5);                           // при вводе 100 - выдаёт 1005

const answer3 = +prompt("Вам есть 18?", "100");      
console.log(answer3 + 5);                           // при вводе 100 - выдаёт 105

const answers = [];

answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

console.log(typeof(answers));
console.log(typeof(null));
*/

// УРОК 8. Интерполяция (ES6)
/*
const category = 'toys';
console.log('http://someurl.com/' + category);              // для короткой строки - ок

console.log('http://someurl.com/' + category + '/' + '4');  // выдаст ошибки

console.log(`http://someurl.com/${category}/5`);

const user = 'Констанция';
alert(`Привет, ${user}`);
*/

// УРОК 9. Операторы в JS
/*
console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + + '9');

let incr = 10,  decr = 10;

incr++;
decr--;
console.log(incr);           // 11
console.log(decr);           // 9

++incr;
--decr;
console.log(incr);           // 11
console.log(decr);           // 9

console.log(5%2);            // 1

= присвоение, == равенство, === равенство по типу данных
console.log(2 * 4 == 8);        // true - boolean значение
console.log(2 * 4 == '8');      // true - сравнение по значению
console.log(2 * 4 === '8');     // false - сравнение по типу данного

console.log(2 + 2 * 2 === 8);      // false 6 != 8
console.log(2 + 2 * 2 != 8);          // true

&& логическое И (true всегда), || логическое ИЛИ (хотя бы один true)
! оператор отрицания 

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose);       // true 

const isChecked2 = true,
    isClose2 = false;

console.log(isChecked2 && isClose2);    // false

const isChecked3 = true,
    isClose3 = false;

console.log(isChecked3 || isClose3);        // true

const isChecked4 = false,
    isClose4 = false;

console.log(isChecked4 || isClose4);        // false

const isChecked5 = false,
    isClose5 = false;

console.log(isChecked5 || !isClose5);        // true
*/

// УРОК 10. Контроль версий Git и сервис GitHub
/*
git init // инициируй этот репазиторий 
git config --local user.name "Constance" // представиться, имя и эмэйл например
git config --local user.email constancegerman@gmail.com

3 состояния файлов у репазитория. 
1 состояние -  просто создан index.html - и просто лежит в проекте. 
2 состояние -  гит следит за опред.файлами и они попадают в опред. индекс.
3 состояние - гит создал контрольную точку, можно наблюдать за изменениями и т.д. - commit

git status - проверить состояние 
git add -A - добавить все файлы в репазитории -all
git status - уже закинуты 
git add main.css - дозакинуть новый файл
git status - уже закинуты 
git commit -a -m"First commit" - добавить -m message
git add -A
git commit -a -m"Second commit"
git log - когда и кем были внесены коммиты

git remote add origin https://github.com/constancegerman/JS_projects.git
git push -u origin master
*/

// УРОК 11. Работа с GitHub с разн.компов. Gitignore, Git Kraken
/*
git clone https://github.com/constancegerman/JS_projects.git JS_projects2 (задаём путь, для клонирования инфы с сайта на раб.комп и имя новой папки)
git push (залить на удалённый реп - сайт)
git pull (залить на локальный репатизаторий - комп дом.)
*/

// УРОК 12. Практика. ч1
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/*
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

// УРОК 13. Условия
/*
if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error!');
};

const num = 50;

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Too big value!');
} else {
    console.log('Ok!');
};

(num === 50) ? console.log('Ok!') : console.log('Error!');  // тернарная операция
4 + 4;   // бинарная
+ '4';   // унарная

// Конструкция switch

const num = 50;

switch (num) {
    case 49:
        console.log('Bad.');
        break;
    case 100:
        console.log('Too bad.');
        break;
    case 50:
        console.log('Good.');
        break;
    default:
        console.log('Not now!');
        break;
};
*/

// УРОК 14. Циклы
/*
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
};                          // 50 51 52 53 54 55 

do {
    console.log(num);
    num++;
} while (num < 55);        // 50 51 52 53 54

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}                          //50 51 52 53 54 55 56

пример вечного цикла
for (let i = 1; i < 0; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}                           // 1 2 3 4 5 

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}                           // 1 2 3 4 5 7 8 9 - 6ка пропущена, и цикл продолжает дальше работу
*/

// УРОК 15. ч2. Применение условий и циклов
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
Код возьмите из предыдущего домашнего задания    */

/*
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    };

};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель!');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
};

console.log(personalMovieDB);

    // ДОДЕЛАТЬ!
    let i = 0;
    while (i < 2) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
              i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
            
        }
    };
*/

// УРОК 16. Стрелочные функции (ES6)

/*
function showFirstMessage() {
    console.log('Hello!');
}

showFirstMessage();

// Анонимные функции бывают, сразу пишутся и сразу используются. В будущем их нельзя использовать.

// Функции с аргументами 
function showFirstMessage(text,) {         // могут быть мн-во аругентов 
    console.log(text);
}

showFirstMessage('Hello!');

//
function showFirstMessage(text) {        
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello!');     // Hello!
console.log(num);               // Error! Локальная переменная, она не видна, т.к. находится внутри функции.

//
let num = 20;

function showFirstMessage(text) {        
    console.log(text);
    num = 10;
}

showFirstMessage('Hello!');     // Hello!
console.log(num);               // 10, т.к. внутри она изменена 

//
let num = 20;

function showFirstMessage(text) {        
    console.log(text);
    let num = 10;
}

showFirstMessage('Hello!');     // Hello!
console.log(num);               // 20, т.к. при вызове обращается к глобальной переменной 

// Замыкание функции - сама функция вместе со всеми внешними переменными, доступными ей

function calc(a, b) {
    return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// После return - ничего не задаём, прерывает функцию

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Классификация функций

Function Declaration.   // существует ещё до того, как наш код запустится, так же, как переменная varю Вызывать можно раньше, чем он создана. 
function foo() { 
    // код  
}

Function Expression.   // создаётся только тогда, когда до неё доходит код
let foo = function() { 
    // код  
};

const logger = function() {
    console.log("Hello!")
};

logger();

Стрелочная функция. // не имеет контекста вызова this, чаще используется в обработчиках событий.
() =>

const Calc = (a, b) => a + b;
*/

// УРОК 17. Методы и свойства строк и чисел
/*
const str = 'test';
console.log(str.length);
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const arr = [1, 2, 3];
console.log(arr.length);

//console.log(str[2]);

const fruit = 'Some fruit';
// поиск подстроки
console.log(fruit.indexOf('fruit'));

const logg = 'Hi, friend!';

console.log(logg.slice(4, 7));      // в аргументе end - значение не включается 
console.log(logg.slice(4));
console.log(logg.slice(-2, -5));
// substring - до какого символа вырезать
console.log(logg.substring(6, 11))
// 2 аргумент - сколько символов вырезать
console.log(logg.substr(6, 1))

// Работа с числами, библиотека Math 
const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));        // 12 - целое и преобразование сразу в числовой тип данных

const test = '12.2px';
console.log(parseFloat(test));        // 12.2 - вещественное и преобразование сразу в числовой тип данных
*/

// УРОК 18. Практика ч3. Используем функции
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно
// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        };
    
    };
}

//rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    };
}

//detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
};

showMyDB(showMyDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
};

writeYourGenres();
*/

// УРОК 19. Callback - функции
/*
function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
// в начале на вывод 2, а потом 1 (т.к. у первой задержка)

// Callback - функция, кот-ая должна быть выполнена после того, как другая завершит выполнение 

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I did it.');
}

learnJS('JavaScript', done);
*/

// УРОК 20. Объекты, деструктиризация объектов ES6
// Объекты в JS - это подобие ассоциативных массивов
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
}

// Деструктуризация объекта 
const {border, bg} = options.colors;
console.log(border);                               // 'black' 

options.makeTest();                                // 'Test'
console.log(Object.keys(options));                 // [ 'name', 'width', 'height', 'colors' ]
console.log(Object.keys(options).length);          // 4

console.log(options['colors']['border']);       // 'black' 

console.log(options.name);      // 'test'

delete options.name;            // name: 'test'
console.log(options);           // выводит без name

// вывод - 4 строки Property name has a value test
// Property width has a value 1024
// Property height has a value 1024
// Property colors has a value [object Object]

let counter = 0;

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for(let i in options[key]) {
            console.log(`Property ${i} has a value ${options[key][i]}`);
            //counter++;
        }
    } else {
    console.log(`Property ${key} has a value ${options[key]}`);
    counter++;
    }
}

console.log(counter);
// Есть и for of - но не работает с объектами.
*/

// УРОК 21. Массивы и псевдомассивы
/*
const arr = [1, 2, 3, 6, 8];
arr[99] = 0; // нарушение логики! Нельзя!
arr.pop();                  // [ 1, 2, 3, 6 ]
console.log(arr);

arr.push(10);
console.log(arr);             // [ 1, 2, 3, 6, 8, 10 ]

// Методы shift и unshift - почти не исп, начало удаление и добавление, т.к. придётся менять индекс

for(let i = 0; i < arr.length; i++) {   
    console.log(arr[i]);
}                                 // 1  2   3   6   8  

for(let value of arr) {
    console.log(value);
}                                   // 1  2   3   6   8 

console.log(arr.length);            // 5
// Соотношение св-ва length и поряд.номеров. Length - последний индекс массива + 1
// Массивы - для хранения элементов строго по порядку.

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// Метод forEach, map, reduce, filter, join и т.д.
// map позволяет модифицировать данные в отличие от forEach

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// 0: 1 внутри массива 1,2,3,6,8
// 1: 2 внутри массива 1,2,3,6,8
// 2: 3 внутри массива 1,2,3,6,8
// 3: 6 внутри массива 1,2,3,6,8
// 4: 8 внутри массива 1,2,3,6,8

const str = prompt('', '');             // биби, ляля, куку, рере 
const products = str.split(', ');       
console.log(products);                  // 0: 'биби', 1: 'ляля', 2: 'куку',  4: 'рере'                      
console.log(products.join('; '));       // биби; ляля; куку; рере   
products.sort();                        // биби; куку; ляля; рере 
// join - объединение элементов массива
// Псевдомассивы - не имеют методов 
*/

// УРОК 22. Передача по ссылке или значению. Поверхн.копия. Spread оператор (ES6-ES9)
/*
let a = 5,
    b = a;

b = b + 5;
console.log(b);     // 10
console.log(a);     // 5

const obj = {
    a: 5,
    b: 1
};

const copy = obj;   // Ссылка на пред.структуру 

copy.a = 10;
console.log(copy);  // {a: 10, b: 1}
console.log(obj);   // {a: 10, b: 1}
// Передача данных объекта = по ссылке, это не работает. 

// ВАР 1. Копирование объекта через цикл например
function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;  
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);   // Клонирование объекта 

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

// ВАР 2. Объединение нескольких объектов - Object.assign
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));   // { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }
// Создана независимая поверхностная копия

const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);       // { d: 17, e: 20 }
// console.log(clone);     // { d: 20, e: 20 }

// ВАР 3. Метод для создания копии массива - slice
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasda';
console.log(newArray);     // [ 'a', 'asdasda', 'c' ]
console.log(oldArray);     // [ 'a', 'b', 'c' ]

// ВАР 4. ES6 - для массива, ES8 - для объектов. SPREAD оператор - РАЗВОРОТА 
// Разворачивает структуру и делаёт из неё обычн.набор данных
// ...video - превращает в об.данные, через запятую

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);  // [ 'youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook' ]

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];  

log(...num);            // 2    5    7

const array = ['a', 'b'];

const newArr = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
*/
