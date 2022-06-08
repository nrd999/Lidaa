// destructuring
// https://learn.javascript.ru/destructuring-assignment

// define property
// https://learn.javascript.ru/property-descriptors

// setter getter
// https://learn.javascript.ru/property-accessors

// 1) uneq angleren aybuben@ arrayov, greq function vor kstana voreve tar ev kveradardzni object
//    vortex vorpes key nshvac klini stacac tar@ isk vorpes value te vorerord tarn e aybubenum
//    orinak f('a') kveradardzni {a: 1}
// let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Gor
// let arr = [
//     'a','b','c','d','e','f','g','h',
//     'i','j','k','l','m','n','o','p','q',
//     'r','s','t','u','v','w','x','y','z'
// ];

// function sayTheLetterNumber (letter) {
//     return { [letter]: arr.indexOf(letter) + 1 }
// }

// console.log( sayTheLetterNumber('v') );

// Nik
// function f(letter){
//     let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     for(let i=0; i<arr.length;i++){
//         let obj={}
//         if(letter===arr[i]){
//             obj[letter]=i+1
//             return obj
//         }
//     }
//     return "Please write letter in english"
// }
// f('a')
// --------- ANSWER ---------
// function f(letter) {
//     return {
//         [letter] : arr.indexOf(letter) + 1
//     }
// }

// console.log(f('b'));

// 2) greq function vory stanum e object ev veradarcnum array vortex objecti amen key valuen krkin array e;
//    orinak f({a:1, b: 2, c: 3}) ------>>> [['a',1],['b',2],['c',3]]
//    aysinqn grum eq Object.entries methody

// Gor
// function objectEntries (obj) {
//     let arr = [];
//     for (let key in obj) {
//         arr[arr.length] = [key, obj[key]]
//     }
//     return arr;
// }
// console.log( objectEntries({a:1, b: 2, c: 3}) );

// Nik
// function f(obj){
//     let arr = [];
//     let arr1 = Object.keys(obj);  
//     let arr2 = Object.values(obj);
//     for(let i=0; i < Object.keys(obj).length; i++){
//         arr[i] =[ arr1[i], arr2[i] ]
//      }
//      return arr
//  }
//  f({a:1, b: 2, c: 3})

// --------- ANSWER ---------
// function f(obj) {
//     // const arr = [];
//     // for(let key in obj) {
//     //     arr.push([key, obj[key]])
//     // }
    
//     // return arr

//     // OR
//     return Object.keys(obj).map(key => [key, obj[key]])
// }

// console.log(f({a: 1, b: 2, c: 3}));

// 3) greq function vory kstana  arajin argumentov nshvac students array@
//    ev  2 rd argument object, vortex klini mek key-value--> name, gender, kam age,
//    orinak {name: 'Anna'} kam {gender: true} kam {age: 21} ev kveradardzni
//    array ayn usanoxneri objectnerov voronq hamapatasxanum en 2rd argumentov trvac parametrin
//    orinak {gender: true} stanalu depqum kveradarcni [{Annai}, {Svetai}] objectner@
//    ete vochmiban chi hamapatasxanum datark array

// const students = [
//     {
//         name: 'Gor',
//         gender: false,
//         age: 20
//     },
//     {
//         name: 'Mariam',
//         gender: true,
//         age: 21
//     },
//     {
//         name: 'Nik',
//         gender: false,
//         age: 22
//     },
//     {
//         name: 'Argisht',
//         gender: false,
//         age: 23
//     },
// ];

// Gor
// function findTheRightPair(arr, object) {
//     let students = [];
//     arr.forEach(obj => {
//         for (let key in object) {
//             if (obj[key] === object[key]) {
//                 students.push(obj);
//             }
//         }
//     }) 
//     return students;
// }
// console.log( findTheRightPair(students, {gender: false}) );

// --------- ANSWER ---------
// function f(students, filter) {
//     const filterKey = Object.keys(filter)[0];
//     return students.filter(student => student[filterKey] === filter[filterKey])
// }

// const filter = {age: 16};
// console.log(f(students, filter));

// 1) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     return
//     {
//         bar: 'hello'
//     }
// }

// console.log(foo());

// Gor
// ktpi undefined qani vor return i toxum grvac ban chka

// 2) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     return {
//         name: 'John',
//         skills: ['Fight', (() => console.log(1))()]
//     }
// }

// console.log(foo.skills);
// console.log(foo().skills[1]);

// Gor
// undefined
// 1

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let x = (function foo (name) {
//     return {
//         name,
//         skills: ['Fight', () => console.log(1)]
//     }
// })('John')

// console.log(x);
// console.log(foo.name);
// console.log(foo);

// Gor
// {name: "John", skills: function}
// foo is not a defined

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {name: 5};
// let x = 'name';
// obj[x] = 10;

// console.log(obj);

// console.log(obj.toString())

// Gor
// {name: 10}
// [object Object]

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {name: 5};
// let x = {key: 5};
// let y = {key: 7};

// obj[x] = x.key;
// obj[y] = y.key;

// console.log(obj);
// console.log(obj[x]);

// Gor
// indz tvuma a error vorovhetev popoxakani anuny talisenq object
