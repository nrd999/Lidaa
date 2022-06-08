// --------- SETTIMEOUT, SETINTERVAL, WEB API METHODS ---------
// Application Programming Interfaces (APIs) 

// --------- setTimeout ---------
// function sayHi() {
//     console.log('hi')
// }

// setTimeout(sayHi, 3000);
// sayHi();

// --------------------------------

// setTimeout(() => console.log('hi'), 5000);

// --------------------------------
// We can pess arguments to sayHi function

// function sayHi(name, age) {
//     console.log(`Hi ${name} ${age}`)
// }

// setTimeout(sayHi, 2000, 'John', 12);

// setTimeout(() => sayHi('John', 12), 5000)

// --------------------------------
// --- returned value is timer id ----

// let timerId = setTimeout(() => console.log(count++), 2000);
// clearTimeout(timerId);

// --------------------------------
// setTimeout(function () {
//     console.log(1)
//     setTimeout(function () {
//         console.log(2)
//     },3000)
// }, 2000)

// --------- setInterval ---------
// function sayHi() {
//     console.log('hi')
// }

// setInterval(sayHi, 1000);

// --------------------------------

// setInterval(() => console.log('hi'), 1000);

// --------------------------------

// let count = 0;
// let timerId = setInterval(() => count === 3 ? clearInterval(timerId) :  console.log(count++), 1000);
// 
// --------------------------------
// sync async function

// setTimeout and setInterval are async functions

// console.log(1);

// setTimeout(() => console.log(2), 1000);

// console.log(3);

// --------------------------------
// console.log(1);

// setTimeout(() => console.log(2), 2000);

// let num = 3;

// function typeNum() {
//     console.log(num)
// }
// typeNum(num)

// --------------------------------
// function is called only if stack is empty

// console.log(1);

// setTimeout(() => console.log(2), 0);

// console.log(3);

// --------------------------------

// console.log(1);

// setTimeout(() => console.log(2), 0);

// --------------------------------
// setTimeout(() => console.log("I'm here"), 0);

// for (let i = 0; i < 10000; i++) {
//     console.log(i)
// }

// --------- examples ---------

// let num = Math.round(Math.random() * 10);

// console.log(num);

// let timerId = setTimeout(() => console.log(num), 2000);

// if(num > 4) {
//     clearTimeout(timerId)
// }

// --------------------------------

// let count = 0;

// let timerId = setInterval(() => {
//     count++;
//     if(count === 4) {
//         clearInterval(timerId)
//     }
//     console.log(count)
// }, 1000)

// --------------------------------

// let timerId = setInterval(() => {
//     console.log('some text')
// }, 2000)


// setTimeout(() => clearInterval(timerId), 8000);

// --------------------------------
// setInterval(() => {
//     console.log('some text')
// }, 2000)

// for (let i = 0; i < 1000; i++) {
//     console.log(i)
// }


