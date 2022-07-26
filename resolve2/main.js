// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [122, 433, 'lufi', 'arc', -22, 777, true, 911, 3.14, 'Oslo'];
console.log(arr);
console.log(arr.length)
console.log(arr [0]);
console.log(arr [1]);
console.log(arr [2]);
console.log(arr [3]);
console.log(arr [4]);
console.log(arr [5]);
console.log(arr [6]);
console.log(arr [7]);
console.log(arr [8]);
console.log(arr [9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'After tomorrow',
    pageCount: 236,
    genre: 'scifi'
}
console.log(book1);
let book2 = {
    title: 'The last night',
    pageCount: 363,
    genre: 'novel'
}
console.log(book2);
let book3 = {
    title: 'Alexander',
    pageCount: 431,
    genre: 'history'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book_1 = {
    title: 'The 5th way',
    pageCount: 276,
    genre: 'scifi',
    author: [
        {name: 'Rick Yansey',
        age: 60}
    ]
};
console.log(book_1);

let book_2 = {
    title: 'The last of the mohicans',
    pageCount: 378,
    genre: 'novel',
    author: [
        {name:'James Cooper',
        age: 57}
    ]
};
console.log(book_2);

let book_3 = {
    title: 'Rome',
    pageCount: 397,
    genre: 'history',
    author: [
        {name: 'Dan Lacetti',
        age: 44}
    ]
}
console.log(book_3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasyl', username: 'koko', password: 555555},
    {name: 'oksana', username: 'bella', password: 76556543},
    {name: 'alex', username: 'racer', password: 872365},
    {name: 'diego', username: 'diego', password: 12334566},
    {name: 'kiril', username: 'pastor', password: 7344749},
    {name: 'lesya', username: 'fifa', password: 77223355},
    {name: 'tatiana', username: 'diva', password: 924487},
    {name: 'olha', username: 'bard', password: 1111},
    {name: 'vova', username: 'kok', password: 71364},
    {name: 'antonio', username: 'strike', password: 7738588}
];
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);