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