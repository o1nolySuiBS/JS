//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let calc = (a, b) => a * b
console.log(calc(10, 12));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

let calc2 = (a) => a * a * 3.14
console.log(calc2(3));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calc3 = (r, h) => 2 * 3.14 * r* 11
console.log(calc3(2, 5));

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let showMessage = (text) =>
    document.write(`<p>${text}</p>`);

showMessage('asdqawdasdasdawdasdaw dasdwadsdaw')
//- створити функцію яка приймає масив та виводить кожен його елемент

let user = [
    {
        name: 'Andriy1',
        age: 34,
        stat: true
    },
    {
        name: 'Andriy2',
        age: 34,
        stat: true
    },
    {
        name: 'Andriy3',
        age: 34,
        stat: true
    }
]

let showUser = (text1)=> {
    for (let i = 0; i < text1.length; i++) {
        let text1Element = text1[i];
        console.log(text1Element);

    }

}
showUser(user);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ShowUL = (Ulargument) => {
    document.write(`<ul>`)
    document.write(`<li> ${Ulargument} </li>`)
    document.write(`<li> ${Ulargument} </li>`)
    document.write(`<li> ${Ulargument} </li>`)
    document.write(`</ul>`)
}

ShowUL('123')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ShowUL1 = (Ulargument1) => {
    document.write('<ul>')
    for (let i = 0; i < Ulargument1.length; i++) {
        let ulargument1Element = Ulargument1[i];
        document.write(`<li>${Ulargument1}</li>`)
    }
    document.write('</ul>')

}

ShowUL1('3453')
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let massive = ['asda', 22, true, '123', 399, false]

let ElementCather = (element) => {
    document.write(`<ul>`)
    for (let i = 0; i < element.length; i++) {
        let elementElement = element[i];
        document.write(`<li>${element[i]}</li>`)
    }
    document.write(`</ul>`)
}

ElementCather(massive)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//(масив)
let user1 = [
    {
        name: 'Sanya',
        age: 23,
        id: 12423145145
    },
    {
        name: 'Bob',
        age: 13,
        id: 423653246
    },
    {
        name: 'Vova',
        age: 51,
        id: 123123123
    }
]

let Object = (people) => {
    for (let i = 0; i < people.length; i++) {
        document.write(`<div>name: ${people[i].name}<br>age: ${people[i].age}<br>id: ${people[i].id} </div>`)
    }
}

Object(user1)

// - створити функцію яка повертає найменьше число з масиву
let minNumber = (array1) => {
    let min = array1[0];

    for (let i = 1; i < array1.length; i++) {
        if (array1[i] < min) {
            min = array1[i];
        }
    }
    return min;
}

let array2 = [8, 5, 3, 2, 6, 9]
let inumber = minNumber(array2)
console.log('number: ', inumber)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let j = [1, 3.3, 5, 10]

let sum = (arr)=> {
    let mass = Array.from(arr)
    let result = 0
    for (const number of mass) {
        result = result + number
    }
    console.log('sum: ', result)
}

sum(j)
// створити функцію swap(arr,index1,index2). Функція міняє місцями знвчення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let pinokio = [11, 22, 33, 44]

let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}

arrone = swap(pinokio, 0, 1)
console.log(arrone)
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeR = 0;
    for (const currencyI of currencyValues) {
        if (currencyI.currency === exchangeCurrency) {
            exchangeR = currencyI.value;
        }
    }
    const exchangedA = sumUAH / exchangeR;
    return exchangedA;
}

const result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);