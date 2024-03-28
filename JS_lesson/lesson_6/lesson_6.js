// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr1 = 'hello world'
let arr2 = 'lorem ipsum'
let arr3 = 'javascript is cool'
console.log(arr1, arr2, arr3)
console.log(arr1.length, arr2.length, arr3.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hireg1 = 'hello world';
let hireg2 = 'lorem ipsum';
let hireg3 = 'javascript is cool';
console.log(hireg1.toUpperCase())
console.log(hireg2.toUpperCase())
console.log(hireg3.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'HELLO WORLD', 'JAVASCRIPT IS COOL'
let lowreg1 = 'HELLO WORLD'
let lowreg2 = 'HELLO WORLD'
let lowreg3 = 'JAVASCRIPT IS COOL'
console.log(lowreg1.toLowerCase())
console.log(lowreg2.toLowerCase())
console.log(lowreg3.toLowerCase())


//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
str = str.trim()
console.log(str)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні'

function stringToarray(str) {
    let word = str2.split(' ');
    return word;
}

let arr = stringToarray(str);
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let mass = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
console.log(mass.map(value => value.toString()))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
console.log(mass.sort(function (a, b){
    return b - a

}))

//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort(function (a, b){
    return b.monthDuration - a.monthDuration


}))
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(filterunder5 = coursesAndDurationArray.filter(a => a.monthDuration > 5))

// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log( maptransform = coursesAndDurationArray.map((a,b) =>{
        return {
            ...a,
            id: b
        }
    }
))
// описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},];
// - знайти піковий
let tuz = cards.find((cards) => cards.value ==='ace' && cards.cardSuit === 'spade')
console.log(tuz)
// - всі шістки
let six = cards.find((cards) => cards.value === '6')
console.log(six)
// - всі червоні карти
let redcards = cards.find((cards) =>cards.color === 'red')
console.log(redcards)
// - всі буби
let bubu = cards.find((cards) => cards.cardSuit === 'diamond')
console.log(bubu)
// - всі трефи від 9 та більше
let bggr = cards.filter((cards) => cards.cardSuit ==='clubs' && ['6'-'10', 'ace','jack','queen','king'].includes(cards.value)   )
console.log(bggr)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cards2 = cards.reduce((a1, a2) => {
    if (a2.cardSuit === 'diamond') {
        a1.diamonds.push(a2)
    }else if (a2.cardSuit === 'clubs') {
        a1.clubs.push(a2)
    }
    else if (a2.cardSuit === 'heart') {
        a1.hearts.push(a2)
    } else if (a2.cardSuit === 'spade') {
        a1.spades.push(a2)
    }
    return a1;
}, {spades: [], hearts: [],  diamonds: [], clubs: []})
console.log(cards2);
// =========================
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
let bimbimbambam= coursesArray.filter((c) => c.modules.includes('sass'));
console.log(bimbimbambam)
// --написати пошук всіх об'єктів, в який в modules є docker
let bimbimbam= coursesArray.filter((c) => c.modules.includes('docker'));
console.log(bimbimbam)
// бімбімбамбам