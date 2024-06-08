// <!--Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
//  Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом-->
// const form = document.forms.creator
// form.onsubmit = function (ev) {
//     ev.preventDefault()
//
//     const form = document.createElement('div')
//     const name = document.createElement('div')
//     const surName= document.createElement('div')
//     const age= document.createElement('div')
//
//     name.innerText = `Name: ${this.name.value}`
//     surName.innerText = `Surname: ${this.surName.value}`
//     age.innerText = `age: ${this.age.value}`
//
//     this.name.value = ''
//     this.surName.value = ''
//     this.age.value = ''
//
//     form.append(name,surName,age)
//     document.body.appendChild(form)
// }
//
// // <!--==========================-->

// // <!--є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до
// // неї +1-->
// const key= localStorage.getItem('key') || 0;
// const present = document.getElementById('b')
// const key1 =(Number(key) + 1).toString()
//
// present.innerText  = key1
// localStorage.setItem('key', key1)

// <!--=========================-->
// <!--зробити масив на 100 об'єктів та дві кнопки prev next-->
// <!--при завантажені сторінки з'являються перші 10 об'єктів.-->
// <!--При натисканні next виводяться настпні 10 об'єктів-->
// <!--При натисканні prev виводяться попередні 10 об'єктів-->
// document.addEventListener('DOMContentLoaded', () => {
//
//     let users = [];
//     for (let i = 0; i < 100; i++) {
//         users.push({name: 'User' + i, id: i + 1, age: i + 10});
//     }
//
//     let info = document.querySelector('.cards');
//     let prev = document.querySelector('.prev');
//     let next = document.querySelector('.next');
//
//     let currentPage = 1;
//     let itemsPerPage = 10;
//
//     function displayItems(page) {
//         info.innerHTML = ''; // Clear previous items
//         let startIndex = (page - 1) * itemsPerPage;
//         let endIndex = startIndex + itemsPerPage;
//
//
//         let currentItems = users.slice(startIndex, endIndex);
//         currentItems.forEach(item => {
//             let h1 = document.createElement('h4');
//             h1.innerHTML = `${item.name} / age - ${item.age} / id - ${item.id}`;
//             info.appendChild(h1);
//         });
//     }
//
//     displayItems(currentPage);
//
//     prev.onclick = function () {
//         if (currentPage > 1) {
//             currentPage--;
//             displayItems(currentPage);
//         }
//     }
//
//     next.onclick = function () {
//         let totalPages = Math.ceil(users.length / itemsPerPage);
//         if (currentPage < totalPages) {
//             currentPage++;
//             displayItems(currentPage);
//         }
//     }
// });
// <!-- - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".-->
// document.addEventListener('DOMContentLoaded', () => {
//     let hideButton = document.querySelector('.hide');
//     let isHidden = false;
//
//     hideButton.onclick = function () {
//         let textElement = document.querySelector('#text');
//         if (isHidden) {
//             textElement.style.display = 'block';
//             this.innerText = 'Hide';
//         } else {
//             textElement.style.display = 'none';
//             this.innerText = 'Show';
//         }
//         isHidden = !isHidden;
//     }
// });
// <!-- - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//  та повідомити про це користувача-->
// let map = document.querySelector('.submit');
// map.onclick = function () {
//     let value = +document.querySelector('#submit').value
//     if (value < 18) {
//         alert('Ти не повнолітній')
//     }
// }

// <!--*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.-->
// <!--При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.-->
// <!--(Додатковачастина для завдання)-->
// ----------------------------




