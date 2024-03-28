//--------------------------------------TASK 1----------------------------------------
let mass = ['Audi', 'Honda', 'Nissan', 'Lexus', 13, -20, 567, "True", 24, 1];
console.log(mass[0])
console.log(mass[1])
console.log(mass[2])
console.log(mass[3])
console.log(mass[4])
console.log(mass[5])
console.log(mass[6])
console.log(mass[7])
console.log(mass[8])
console.log(mass[9])
//-------------------------------------TASK 2-------------------------------------------
{
    let book = {title: 'My_life', PageCount: 256, genre: 'Biographies, memoirs, aphorisms'}
}
{
    let book1 = {title: 'My_life', PageCount: 256, genre: 'Biographies, memoirs, aphorisms'}
}
{
    let book2 = {title: 'My_life', PageCount: 256, genre: 'Biographies, memoirs, aphorisms'}
}
//--------------------------------------TASK 3-------------------------------------------
{
    let book = {title: 'My_life', PageCount: 256, genre: 'Biographies, memoirs, aphorisms', authors: ['Benito', 30]}
}
{
    let book1 = {title: 'My_life', PageCount: 256, genre: 'Biographies, memoirs, aphorisms', authors: ['Benito', 30]}
}
{
    let book2 = {title: 'My_life', PageCount: 256, genre: ' Biographies, memoirs, aphorisms', authors: ['Benito', 30]}
}
//--------------------------------------TASK 4-------------------------------------------
let user = [
    {name: 'Nissan', username: 'Skyline', password: 11123452},
    {name: 'Mazda', username: 'rx-7', password: 113456},
    {name: 'Chevrolet', username: 'Corvette', password: 12567856},
    {name: 'Honda', username: 'S2000', password: 13960},
    {name: 'Mazda', username: 'mx-5', password: 1476857},
    {name: 'Toyota', username: 'Supra', password: 153425},
    {name: 'taras', username: 'l', password: 1643265},
    {name: 'Honda', username: 'Nsx', password: 172131234123},
    {name: 'Nissan', username: 'GT-R', password: 1823412334124},
    {name: 'Lexus', username: 'Lfa', password: 1931423},
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)
//---------------------------------------TASK 5-------------------------------------------
let x;
x = 1;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
x = 0
console.log(x !== 0 ? 'Вірно' : 'Невірно')
x = -3
console.log(x !== 0 ? 'Вірно' : 'Невірно')
//---------------------------------------TASK 6-------------------------------------------
// 0<x<15
let time = Math.ceil(Math.random() * 59);
console.log(time);
if (time >= 0 && time <= 15) {
    console.log('перша половина');
} else if (time >= 16 && time <= 30) {
    console.log('друга половина');
} else if (time >= 31 && time <= 45) {
    console.log('третя половина');
} else if (time >= 46 && time <= 59) {
    console.log('черверта половина');
}
//---------------------------------------TASK 7-------------------------------------------
{
    let day = Math.ceil(Math.random() * 31);
    console.log(day);
    if (day >= 1 && day <= 10) {
        console.log('перша половина');
    } else if (day >= 11 && day <= 20) {
        console.log('друга половина');
    } else if (day >= 21 && day <= 31) {
        console.log('третя половина');
    }
}
//---------------------------------------TASK 8-------------------------------------------
let week = prompt('enter your day')
switch ('week') {
    case 'Monday':
        console.log('work');
        break;

    case 'Tuesday':
        console.log('work');
        break;

    case 'Wednesday':
        console.log('home');
        break;

    case 'Thursday':
        console.log('go to shop');
        break;

    case 'Friday':
        console.log('work');
        break;

    case 'Saturday':
        console.log('work');
        break;

    case 'Sunday':
        console.log('home')
        break;

    default :
        console.log('enter your day');
}
//---------------------------------------TASK 9-------------------------------------------
let numberone = Math.ceil(Math.random() * 100)
console.log(numberone)
let numbertwo = Math.ceil(Math.random() * 100)
console.log(numbertwo)
if (numberone > numbertwo)
    console.log('перше', numberone);
if (numberone < numbertwo)
    console.log('друге', numbertwo)
else if (numberone === numbertwo) {
    console.log('Числа рівні', numberone, numbertwo);
}
//---------------------------------------TASK 10-------------------------------------------
x = 0;
console.log(!!x)
if (x === null || x === 0 || x === '' || x === undefined) {
    x = "default"
}
console.log(x)
//---------------------------------------TASK 11-------------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super")
}
