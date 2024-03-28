//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>hi</div>`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let i = 0; i < 10; i++) {
    document.write(`<div>$[i] скільки годин? </div>`)

}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h5>tewadZSd</h5>`);
    i++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

i = 0;
while (i < 20) {
    document.write(`<h5>${i}ababagalamaga</h5>`);
    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву.
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')

for (let j = 0; j < 9; j++) {
    const listOfItem = listOfItems[j];
    document.write(`<ul><li>${listOfItem}</li></ul>`)
}

document.write('</ul>')


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let o = 0; o < products.length; o++) {
    const product = products[o];
    document.write(`<div>
                    <h1>${product.title} - ${product.price} PL</h1>
                    <img src="${product.image}" alt="">
                    </div>`)
}
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write(`<h3>True</h3>`);
    }
}
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`<h3>false</h3>`);
    }
}
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(`<h3>31</h3>`);
    }
}

//-створити масив з:
//- з 5 числових значень
let arr1 = [1, 2, 3, 4, 5];
//- з 5 стічкових значень
let arr2 = [`1, 2, 3, 4, 5`];
//- з 5 значень стрічкового, числового та булевого типу
let arr10 = [false, true, true, false, true];
//- та вивести його в консоль
let arr3 = ['13', true, 3, 1, '10'];
for (let a of arr3) {
    console.log(a);
}
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let masive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let io = 0
while (io < masive.length) {
    console.log(masive[io]);
    io++
}
// 2. перебрати його циклом for
for (let o of masive) {
    console.log(o);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let m = 0;
while (m < masive.length) {
    if (m % 2) {
        console.log(masive[m])
    }
    m++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let x = 0; x < masive.length; x++) {
    if (x % 2) {
        console.log(masive[x])
    }
    x++
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let z = 0
while (z < masive.length) {
    if (!(z % 2)) {
        console.log(masive[z])
    }
    z++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < masive.length; j++) {
    if (!(j % 2)) {
        console.log(masive[j])
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < masive.length; j++) {
    if (!(masive[j] % 3)) {
        masive[j] = 'okten'
    }
}
console.log(masive)
// 8. вивести масив в зворотньому порядку.
for (let j = masive.length - 1; j >= 0; j--) {
    let masiveElement = masive[j];
    console.log(masiveElement)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
{//===========================================================TASK 1===========================================================
    let masive = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

    let j = masive.length - 1;
    while (j >= 0) {
        console.log(masive[j])
        j--;
    }
//===========================================================TASK 2===========================================================
    for (let k = masive.length - 1; k >= 0; k--) {
        const jElement = masive[k];
        console.log(masive[k])
    }
//===========================================================TASK 3===========================================================
    let h = masive.length - 1
    while (h > 0) {
        if (h % 2) {
            console.log(masive[h])
        }
        h--
    }
//===========================================================TASK 4===========================================================
    for (let k = masive.length - 1; k >= 0; k--) {
        const masiveElement = masive[k];
        if (k % 2)
            console.log(masive[k])
    }

//===========================================================TASK 5===========================================================
    let z = masive.length - 1
    while (z > 0) {
        if (!(z % 2)) {
            console.log(masive[z])
        }
        z--
    }
//===========================================================TASK 6===========================================================
    for (let j = masive.length - 1; j >= 0; j--) {
        if (!(j % 2)) {
            console.log(masive[j])
        }
    }
//===========================================================TASK 7===========================================================
    for (let j = masive.length - 1; j >= 0; j--) {
        if (!(masive[j] % 3)) {
            masive[j] = 'okten'
        }
    }
    console.log(masive)

}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let guayaba = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = 0; j < guayaba.length; j++) {
    let guayabaElement = guayaba[j];
    console.log(guayabaElement)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr = ['audi', 'honda', 'mazda', 'ford', 'nissan', 'volvo', 'mercedes', 'mitsubishi', 'infiniti', 'toyota']
for (let j = 0; j < arr.length; j++) {
    let arrElement = arr[j];
    console.log(arrElement)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr6 = ['13', 'honda', 'mazda', 11, 'nissan', true, 'mercedes', 'mitsubishi', false, 'toyota']
for (let j = 0; j < arr6.length; j++) {
    let arr6Element = arr6[j];
    console.log(arr6Element)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr7 = [13, 'honda', 12, false, 'nissan', true, 16, 'mitsubishi', false, 'toyota']
for (let j = 0; j < arr7.length; j++) {
    let arr7Element = arr7[j];
    if (typeof (arr7Element) === 'boolean')
        console.log(arr7Element)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < arr7.length; j++) {
    let arr7Element = arr7[j];
    if (typeof (arr7Element) === 'number')
        console.log(arr7Element)
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < arr7.length; j++) {
    let arr7Element = arr7[j];
    if (typeof (arr7Element) === 'string')
        console.log(arr7Element)
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.\
let cocojambo = [];
cocojambo[0] = 12
cocojambo[1] = true
cocojambo[2] = 'cocojambo'
cocojambo[3] = 'ayayo'
cocojambo[4] = 90
cocojambo[5] = true
cocojambo[6] = '65'
cocojambo[7] = false
cocojambo[8] = 'despasito'
cocojambo[9] = 23
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<h5>${i}</h5>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let y = 0; y < 100; y++) {
    console.log(y)
    document.write(`<h5>${y}</h5>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(`<h5>${i}</h5>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i)
        document.write(`<h5>${i}</h5>`)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i)
        document.write(`<h5>${i}</h5>`)
    }
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let book = [
    {name: 'The Churchill Factor', pagecount: 432, authors:[{name: 'Boris Johnson', age: 31}], genre:['History', 'biography', 'political']},
    {name: 'My Life and Work by Henry Ford', pagecount: 274, authors:[{name: 'Henry Ford', age: 33}], genre:['History', 'biography']},
    {name: 'The Adventures of Tom Sawyer', pagecount: 123,authors:[{name :'Mark Twain', age:35}, {name :'someone', age:45}], genre:['Bildungsroman', 'picaresque novel', 'satire', 'folk', 'childrens', 'literature']}
]
// -знайти наібльшу книжку.
let LargestBook = book[0]
for (let i = 0; i < book.length; i++) {
    if(book[i].pagecount > LargestBook.pagecount){
        LargestBook = book[i]
    }
}
console.log("Найбільша кількість сторінок:", LargestBook)
// - знайти книжку/ки з найбільшою кількістю жанрів
let LargestBookGenre = book[0]
for (let i = 0; i < book.length; i++) {
    if(book[i].genre.length > LargestBookGenre.genre.length){
        LargestBookGenre = book[i]
    }
}
console.log("Найбільша кількість жанрів:", LargestBookGenre)
// - знайти книжку/ки з найдовшою назвою
let LargestBookName = book[0]
for (let i = 0; i < book.length; i++) {
    if(book[i].name.length > LargestBookName.name.length){
        LargestBookName = book[i]
    }
}
console.log("Найбільша назва книги:", LargestBookName)
// - знайти книжку/ки які писали 2 автори
let LargestBookAuthors = book[0]
for (let i = 0; i < book.length; i++) {
    if(book[i].authors.length > LargestBookAuthors.authors.length){
        LargestBookAuthors = book[i]
    }
}
console.log("Найбільша кількість авторів:", LargestBookAuthors)
// - знайти книжку/ки які писав 1 автор
let SmallBookAuthor = book[0]
for (let i = 0; i < book.length; i++) {
    if(book[i].authors < SmallBookAuthor.authors){
        SmallBookAuthor = book[i]
    }
}
console.log("Найменша кількість авторів:", SmallBookAuthor)

//======================================================================================================================================================
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
// <!--template 1.1-->
// <!--<div class="users-box">-->
// <!--    <div class="user-block">-->
// <!--        <h2>ID - NAME - USERNAME </h2>-->
// <!--        <h3>EMAIL - PHONE</h3>-->
// <!--        <div class="address-block">-->
// <!--            <p>City - ADDRESS.CITY</p>-->
// <!--            <p>Street - ADDRESS.STREET</p>-->
// <!--            <p>Suite - ADDRESS.SUITE</p>-->
// <!--            <p>Zip code - ADDRESS.ZIPCODE</p>-->
// <!--        </div>-->
// <!--    </div>-->
//
// <!--    &lt;!&ndash;-->
//
// <!--    ...-->
// <!--    ...-->
// <!--    ...-->
// <!--    other users-->
//
// <!--    &ndash;&gt;-->
//
//
// <!--</div>-->

document.write(`<div class="users-box">`);
for (let usersListElement of usersList) {
    document.write(`<div class="user-block">`);
    document.write(`<h2>${usersListElement.id} - ${usersListElement.name} - ${usersListElement.username}</h2>`);
    document.write(`<h3>${usersListElement.email} - ${usersListElement.phone} </h3>`);
    document.write(`<div class="address-block">`);
    document.write(`<p>City - ${usersListElement.address.city}</p>`);
    document.write(`<p>Street - ${usersListElement.address.street}</p>`);
    document.write(`<p>Suite - ${usersListElement.address.suite}</p>`);
    document.write(`<p>Zip code - ${usersListElement.address.zipcode}</p>`);
    document.write(`</div>`);
    document.write(`</div>`);
}
document.write(`</div>`)
//HELP




























