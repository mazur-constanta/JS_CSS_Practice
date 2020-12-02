"use strict";       // директива, работа в современном режиме

// УРОК 5. Переменные и строгий режим 
// let number = 5;

// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const object = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);
// // Прямых констант в JS не бывает.

// console.log(name);
// var name = 'Constance';

// {
//     let result = 50;
// }

// console.log(result);

// {
//     var result = 50;
// }

// console.log(result);

// УРОК 6. Классификация типов данных в JS
// let number = 4.6;

// console.log(-4/0);          // -Infinity
// console.log('string' * 9);  //  NaN not a number

// const person = "Alex";

// const perone = '5';

// const bool = true;          // false

// console.log(something);     // Something is not defined - null

// let und;
// console.log(und);           // Undefined

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// }

// console.log(obj.name);
// console.log(obj['name']);   // Не желательно так писать, но работает

// // Массив - частный случай объекта
// //          0           1           2   3           4   5
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// УРОК 7. Общение с пользователем (alert, confirm, prompt)
//alert('Hello!');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// Вся инфа от пользователей будет в виде - строки. Prompt и т.д.

// const answer2 = prompt("Вам есть 18?", "100");      // +prompt - динамическая типизация
// console.log(answer2 + 5);                           // при вводе 100 - выдаёт 1005

// const answer3 = +prompt("Вам есть 18?", "100");      
// console.log(answer3 + 5);                           // при вводе 100 - выдаёт 105

// const answers = [];

// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// УРОК 8. Интерполяция (ES6)
// const category = 'toys';
// console.log('http://someurl.com/' + category);              // для короткой строки - ок

// console.log('http://someurl.com/' + category + '/' + '4');  // выдаст ошибки

// console.log(`http://someurl.com/${category}/5`);

// const user = 'Констанция';
// alert(`Привет, ${user}`);

// УРОК 9. Операторы в JS
// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + + '9');

// let incr = 10,  decr = 10;

// incr++;
// decr--;
// console.log(incr);           // 11
// console.log(decr);           // 9

// ++incr;
// --decr;
// console.log(incr);           // 11
// console.log(decr);           // 9

// console.log(5%2);            // 1

// = присвоение, == равенство, === равенство по типу данных
// console.log(2 * 4 == 8);        // true - boolean значение
// console.log(2 * 4 == '8');      // true - сравнение по значению
// console.log(2 * 4 === '8');     // false - сравнение по типу данного

// console.log(2 + 2 * 2 === 8);      // false 6 != 8
//console.log(2 + 2 * 2 != 8);          // true

// && логическое И (true всегда), || логическое ИЛИ (хотя бы один true)
// ! оператор отрицания 

// const isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);       // true 

// const isChecked2 = true,
//     isClose2 = false;

// console.log(isChecked2 && isClose2);    // false

// const isChecked3 = true,
//     isClose3 = false;

// console.log(isChecked3 || isClose3);        // true

// const isChecked4 = false,
//     isClose4 = false;

// console.log(isChecked4 || isClose4);        // false

// const isChecked5 = false,
//     isClose5 = false;

// console.log(isChecked5 || !isClose5);        // true

// УРОК 10. Контроль версий Git и сервис GitHub

// git init // инициируй этот репазиторий 
// git config --local user.name "Constance" // представиться, имя и эмэйл например
// git config --local user.email constancegerman@gmail.com

// 3 состояния файлов у репазитория. 
// 1 состояние -  просто создан index.html - и просто лежит в проекте. 
// 2 состояние -  гит следит за опред.файлами и они попадают в опред. индекс.
// 3 состояние - гит создал контрольную точку, можно наблюдать за изменениями и т.д. - commit

// git status - проверить состояние 
// git add -A - добавить все файлы в репазитории -all
// git status - уже закинуты 
// git add main.css - дозакинуть новый файл
// git status - уже закинуты 
// git commit -a -m"First commit" - добавить -m message
// git add -A
// git commit -a -m"Second commit"
// git log - когда и кем были внесены коммиты

// git remote add origin https://github.com/constancegerman/JS_projects.git
// git push -u origin master















