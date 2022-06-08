// for in,
// for of
// let arr = [1, 'str', 3];
// for (let index in arr) {
//     console.log(index);
// }

// for(let value of obj) {

// }

// let obj = {
//     id: 5,
//     name: 'user',
//     isTest: true
// }

// for (let key in obj) {
//     // console.log(key);
//     console.log(obj[key])
// }

// ------ empty objects are not iterable ------
// for (let key in {}) {
//     console.log(key);
// }

// ------ iteration is not ordered if keys are numbers ------
// let obj = {
//     '3' : 'c',
//     '2' : 'd',
//     '1' : 'a',
//     '4' : 'b',
// }

// for (let key in obj) {
//     console.log(key);
// }

// ------ push to array ------
// let obj = {
//     id: 5,
//     name: 'user',
//     isTest: true
// }

// const arr = [];

// for (let key in obj) {
//     arr.push({[key]: obj[key]})
// }

// console.log(arr);
//----------------------------
// ------ copy object ------
// let obj = {
//     name: 'John',
//     surname: 'Wick',
//     age: 30,
// }

// let obj2 = {};
// for(let key in obj) {
//     obj2[key] = obj[key]
// }

// console.log(obj2, obj);
// console.log(obj2 === obj);