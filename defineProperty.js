// ------------------- DEFINE PROPERTY -------------------
// enumerable(show in loop) , writable(can change), configurable(can delete)

// let obj = {
//     name: 'John',
//     surname: 'Shelby',
//     age: 30,
// }

// console.log(obj);
// const descriptors = Object.getOwnPropertyDescriptor(obj, 'surname');

// console.log(descriptors);
// console.log(obj);

// -------- we can set descriptors --------
// let obj = {
//     name: 'John',
//     surname: 'Wick',
//     age: 30,
//     id: 4
// }

// Object.defineProperties(obj, {
//     name: {
//         writable: false
//     },
//     id: {
//         configurable: false
//     },
//     gender: {
//         value: 'man',
//         writable: true,
//     }
// })

// console.log(obj.gender);
// console.log(Object.getOwnPropertyDescriptor(obj, 'gender'));

// delete obj.id
// console.log(obj);
// obj.length = Object.keys(obj).length;
// console.log(obj);
// Object.defineProperty(obj, 'length', {
//     enumerable: false,
//     configurable: false
// })

// Object.defineProperty(obj, 'age', {
//     writable: false,
//     configurable: false,
//     enumerable: false
// })
// console.log(obj.age);
// obj.id = 10
// obj.age = 40;
// delete obj.age
// console.log(obj);
// for(let key in obj) {
//     console.log(obj[key]);
// }
// delete obj.age

// console.log(obj);

// for(let key in obj) {
//     console.log(key);
// }


// -------- we can't redefine property --------
// Object.defineProperty(obj, 'age', {
//     writable: true,
//     configurable: true
// });

// delete obj.age

// console.log(obj);
// // --------------------------------------------
// Examples

// ---------- empty objects ---------
// let obj = {
//     id: 4
// }
// Object.defineProperty(obj, 'name', {
//     value: 'John',
//     // writable: true,
// });

// console.log(obj);
// obj.name = 10
// console.log(Object.getOwnPropertyDescriptor(obj, 'id'));