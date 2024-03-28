// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function Item(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new Item(14, 'awsd', 'ababagalamaga', 'sfd@gmail.com', +38009871235)
console.log(user1)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let userarr = [
    new Item(1, 'mana', 'clarity', '123@gmail.com', +13254),
    new Item(2, 'mana', 'clarity', '123@gmail.com', +1235),
    new Item(3, 'mana', 'clarity', '123@gmail.com', +156),
    new Item(4, 'mana', 'clarity', '123@gmail.com', +14657),
    new Item(5, 'mana', 'clarity', '123@gmail.com', +164584567),
    new Item(6, 'mana', 'clarity', '123@gmail.com', +458645680),
    new Item(7, 'mana', 'clarity', '123@gmail.com', +13567536),
    new Item(8, 'mana', 'clarity', '123@gmail.com', +12436234645),
    new Item(9, 'mana', 'clarity', '123@gmail.com', +13246)
]


console.log(userarr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = userarr.filter(a => a.id % 2 === 0)
console.log(filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
userarr.sort((a, b) => a.id - b.id)
console.log(userarr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new client(1, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers', 'snickers']),
    new client(2, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers']),
    new client(3, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers']),
    new client(4, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers']),
    new client(5, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers']),
    new client(6, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers']),
    new client(7, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers', 'snickers', 'snickers']),
    new client(8, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers']),
    new client(9, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers', 'snickers']),
    new client(0, 'surnuk', 'boberovuch', '123@gmail.com', +2313545, ['bounty', 'snickers', 'snickers'])
]
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length))


// - Створити функцію конструктор яка дозволяє створювати об'єкти honda, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт honda
function Car(model, producer, year, top_speed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.top_speed = top_speed;
    this.engine = engine;
    this.driver = null;




    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.top_speed} на годину`);
    }
    this.info = function () {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.producer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.top_speed}`);
        console.log(`Об'єм двигуна - ${this.engine}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.top_speed += newSpeed;
        console.log(`їдемо зі новою швидкістю ${this.top_speed} на годину`);
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
const honda = new Car('civic Type R', 'Honda motors', '2023', '285', '2.0 TURBO VTEK');
honda.increaseMaxSpeed(15);
honda.changeYear(2010);
function Driver(name, year, exp){
    this.name = name;
    this.year = year;
    this.exp = exp;
}
let Drive = new Driver('igor', 2006, '1 year')
honda.addDriver(Drive)
honda.info()
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти honda, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт honda
class Honda {
    constructor(model, producer, year, top_speed, engine){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.top_speed = top_speed;
        this.engine = engine;
        this.driver = null
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.top_speed} на годину`);
    }
    info() {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.producer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.top_speed}`);
        console.log(`Об'єм двигуна - ${this.engine}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.top_speed += newSpeed;
        console.log(`їдемо зі новою швидкістю ${this.top_speed} на годину`);
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    };
}
const a = new Honda ("Civic", "Honda", 2022, 180, 1.5)
a.drive();
a.increaseMaxSpeed(15);
a.changeYear(2010);
class Drivers {
    constructor(name, year, exp) {
        this.name = name;
        this.year = year;
        this.exp = exp;
    }
}
let Drives = new Drivers('igor', 2006, '1 year')
a.addDriver(Drives)
a.info()
//     -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class popelushka {
    constructor(name, age, Foot) {
        this.name = name;
        this.age = age;
        this.Foot = Foot
    }

}
let pop = [
    new popelushka('popka1',31, 43 ),
    new popelushka('popka2',23, 42 ),
    new popelushka('popka3',65, 39 ),
    new popelushka('popka4',9, 23 ),
    new popelushka('popka5',53, 39 ),
    new popelushka('popka6',3, 16 ),
    new popelushka('popka7',76, 40 ),
    new popelushka('popka8',54,38),
    new popelushka('popka9',23, 44 ),
    new popelushka('popka0',1, 12 )
]
console.log(pop)
class prince{
    constructor(name, age, findtuflya) {
        this.name = name;
        this.age = age;
        this.findtuflya = findtuflya
    }
}


let matching = null;

let princ = new prince('Stefan', 28, 38)

for (let i = 0; i < pop.length; i++) {
    if (pop[i].Foot === princ.findtuflya) {
        matching = pop[i];
        break;}
}

if (matching) {
    console.log(`Принц ${princ.name} знайшов свою попелюшку: ${matching.name}`);
} else {
    console.log(`Принц не знайшов попелюшку зі своєю туфлею.`);
}


const Cinderella = pop.find(popelushka=> popelushka.Foot === princ.findtuflya);
if (Cinderella) {
    console.log(`Принц ${princ.name} знайшов свою попелюшку ${Cinderella.name}`);
} else {
    console.log(`Принц не знайшов попелюшку зі своєю туфлею`);
}
