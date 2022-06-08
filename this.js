// --------------- WINDOW GLOBAL OBJECT ---------------
// In browser global object is window
// universal globalThis

// console.log(window);
// let a = 5;
// console.log(window);

// let arr = new Array();
// Array() is in window

// --------------- "use strict" ---------------
// var obj1 = {
//     x: 42
// };
// Object.defineProperty(obj1, 'x', { writable: false });
// obj1.x = 9;
// console.log(obj1);

// x = 10;
// console.log(x);

// console.log(this);
// function foo() {
//     console.log(this);
// }

// foo()

// Assignment to a non-writable property
// function foo () {
//     "use strict"
//     let obj = {
//         x: 42
//     };
//     Object.defineProperty(obj, 'x', { writable: false });
//     obj.x = 9;
// }

// console.log(foo());

// --------------- this ---------------
// console.log(this);
// let person = {
//     name: 'Smith',
//     sayHi: function () {
//         // console.log(this);
//         return `Hi ${person.name}`
//     }
// };

// function foo() {
//     console.log(this);
// }
// person.name = 'John';
// console.log(person.sayHi())

// let obj = {
//     x: 4,
//     y: {
//         id: 16,
//         sayHi: function () {
//             console.log(this);
//         }
//     }
// }

// obj.y.sayHi()

// --------------------------------------
// let person = {
//     name: 'Smith',
//     sayHi: function () {
//         // console.log(this);
//         return `Hi ${person.name}`
//     }
// };
// let anotherPerson = person;
// person = null;
// console.log(anotherPerson.sayHi())

// -------- we can write this instead object name --------
// let person = {
//     name: 'John',
//     sayHi: function () {
//         return `Hi ${this.name}`
//     }
// }
//
// console.log(person.sayHi());
// let anotherPerson = person;
// console.log(person.sayHi());
// person = null;
// console.log(anotherPerson.sayHi())

// ---------------------------------------------------------------
// let student1 = {
//     name: 'Alex',
//     sayHi: function () {
//         return `Hi ${student1.name}`
//     }
// }
//
// let student2 = {
//     name: 'Anna',
//     sayHi: function () {
//         return `Hi ${student2.name}`
//     }
// }

// let student1 = {
//     name: 'Alex',
// }
// let student2 = {
//     name: 'Anna',
// }
// function sayHi() {
//     return `Hi ${this.name}`
// }
// console.log(sayHi());
// student1.sayHi = sayHi;
// student2.sayHi = sayHi;

// console.log(student1.sayHi())
// console.log(student2.sayHi())
// --------------------------------------
// this without context

// function f() {
//     console.log(this)
// }

// f();

// --------------------------------------
// let obj = {
//     id: 1,
//     sayHi: function () {
//         console.log(this);
//         console.log(this.id);
//     }
// }

// obj.sayHi();
//
// let f = obj.sayHi;
// f()

// ---------- arrow functions haven't this ----------
// let obj = {
//     id: 1,
//     sayHi: () => {
//         console.log(this);
//         console.log(this.id);
//     }
// }

// obj.sayHi();
// let x = obj.sayHi
// x()

// -------------------------------------------------

// arrow function this take parent function this
// let obj = {
//     id: 1,
//     sayHi: function () {
//         let f = () => {
//             let g = () => console.log(this);
//             g()
//         };
//         f()
//     }
// }
//
// obj.sayHi()

// let obj = {
//     word: 'letter',
//     letters: ['a', 'b', 'c'],
//     showLetters: function () {
//         this.letters.forEach(item => console.log(`${this.word} is ${item}`))
//     },
// }

// obj.showLetters()

// ------------------------------------------------------
// let obj = {
//     a: 1,
//     showLetters: function (b) {
//         let self = this;
//         return function f(c) {
//             console.log(c + b + self.a)
//             // console.log(self);
//         }
//     }
// }

// let obj1 = {
//     a: 2,
//     showLetters: function (b) {
//         let self = this;
//         console.log(this);
//         return function f(c) {
//             console.log(c + b + self.a)
//         }
//     }
// }
// 
// console.log(window);
// let f = obj.showLetters(2);
// f(3)
