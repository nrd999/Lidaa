// ---------------- Object.assign() ----------------
// clone object with loop
// let obj = {
//     name: 'John',
//     surname: 'Wick',
//     age: 30,
// }

// let obj2 = {};
// // //
// for(let key in obj) {
//     obj2[key] = obj[key]
// }

// clone object with assign
// let obj = {
//     id: 5,
//     name: 'John'
// }

// let clonedObject = Object.assign({}, obj);
// console.log(clonedObject);
// console.log(clonedObject === obj);

// --------------------------------------------
// let obj1 = {
//     id: 5,
//     isTest: true,
//     name: 'John',
// }
// let obj2 = {
//     id: 3,
//     surname: 'Wick'
// }
// // console.log(obj1, obj2);
// Object.assign(obj1, obj2);
// // obj2 = obj1
// console.log('obj1', obj1);
// console.log('obj2', obj2);
// console.log(obj1 === obj2);

// ---------------- Object.values() ----------------
// let obj1 = {
//     id: 5,
//     isTest: true,
//     name: 'John'
// }

// let values = Object.values(obj1)
// console.log(Object.values(obj1))

// ---------------- Object.keys() ----------------
// let obj1 = {
//     id: 5,
//     isTest: true,
//     name: 'John'
// }

// let keys = Object.keys(obj1);
// console.log(keys);
// for(let i = 0; i < keys.length; i++) {}

// ---------------- Object.entries() ----------------
// let obj1 = {
//     id: null,
//     isTest: true,
//     name: 'John',
//     age: 6,
// }

// let keys = Object.entries(obj1);
// console.log(keys)

// ---------------- Object.hasOwnProperty() ----------------
// let hasProperty = obj1.hasOwnProperty('age');
// let key = 'id';
// console.log(obj1.hasOwnProperty(key))

