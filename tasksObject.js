// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum, veradardznum e dra valuen hakarak depqum false;
//    orinak stanum e ({id: 5}, 'name') ---> kveradardzni false

// Argisht
// function exam(x,y){
//     for(let key in x){
//         if(key===y){
//             return x[key]
//         }
//     }
//     return false
// }
// console.log(exam({id: 5,nd:5},'nd'));

// Gor
// function getKeyInObject (obj, str) {
//     return obj[str] ? obj[str] : false;
// }

// console.log( getKeyInObject({id: 5}, 'id') );

// Mariam
//  function f(obj, str) {
//      if(obj[str] !== undefined){
//          return obj[str]
//      }
//      else {
//          return false
//      }
//  }
//  console.log(f({id: 5, age: null}, 'name'))

// Nik
// function str(obj,str){
//     for(let key in obj){
//         if(key === str){
//             return obj[key]
//         }
//     }  
//     return false
// }
// str({id: 555}, 'id')

// 2) greq function vory karox stanal cankacac type-i argument,
//    ev stugum e ete stacvac argument@ object e ev parunakum e id keyov arjeq
//    apa kveradardzni ayd arjeq@, hakarak depqum kveradardzni "Is not an object"

// Argisht
// function all(x){
//     if(typeof x ==='object'){
//         for(let key in x){
//             if(key === 'id'){
//                 return x[key]
//             }
//         }
//         return 'Is not an object'
//     }
// }
// console.log(all({id : 54}));

// Gor
// function f (val) {
//     // if (typeof val === 'object' && val.id) {
//     //     return val.id;  
//     // }
//     // return "Is not an object";
//     return typeof val === 'object' && val.id || "Is not an object";
// }

// console.log(f({id: 6}));

// Mariam
// function f(obj){
//     if(obj.id){
//         return obj.id;
//     }
//     else{
//         return "Is not an object";
//     }
// }
// console.log(f({id:3}))

// Nik
// function fun(obj){
//     if(typeof obj === 'object'){
//         for(let key in obj){
//             if(key === 'id'){
//                 return obj[key]
//             }
//         }
//         return 'There is not an object'
//     }
// }
// fun([1,2,3,'id'])

// 1) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: 'John',
//     surname: 'Wick',
// }

// let fullName = `${obj["name"]} ${obj[surname]}`;

// console.log(fullName);

// Mariam
// John Wick

// Argisht
// esik ktpi surname is not definde vortev Nona jan moraceles ""sra mej gres

// Gor
// error
// qani vor surname y haskanuma vorpes popoxakan

// Nik
// Surname is not defined;

// 2) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: 'John',
//     surname: 'Wick',
// }

// obj['age'] = 30;
// obj.age += 10;
// delete obj.surname;

// console.log(obj);

// Argisht
// ste tpma name,,age mer plus aracov 40 en azganunnel jnjma

// Gor
// {
//     name: 'john',
//     age: 40
// }

// Mariam
//obj-i mej 
//name:john
//age:40

// Nik
// Output will be ` {name; 'John', age:40} because we create new key with name age and gave value 30, and after we delete our key in object with property delete

// 3) WHAT WILL BE THE OUTPUT AND WHY
// const obj1 = {
//     id: 1,
// }

// const obj2 = obj1;

// obj2.isTest = true;

// obj1.isTest = false;

// console.log(obj1.isTest);
// console.log(obj2.isTest);

// Argisht
// 2 hat false

// Gor
// false, false

// Mariam
// obj 1=false
// obj2 =false qani vor = en

// Nik
// false,false ` because we creating new object and giving the same reference, so changes will be the same 

// 4) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: '',
//     checkIsTest: (isTest) => console.log(isTest),
//     isTest: false,
// }

// console.log(typeof obj.checkIsTest);
// obj.checkIsTest(obj.isTest);

// Argisht
// typeOf et talis function,, mekel false

// Gor
// function
// false

// Mariam
// function, false

// Nik
// function` because the value of 'checkIsTest" key is function
// false` because our value` function  returns value 'false'

// 5) WHAT WILL BE THE OUTPUT AND WHY
// function hasName(name) {
//    return !!name
// }

// const obj = {
//     name: 'John',
//     hasName,
// }

// console.log(obj.hasName(obj.name));

// Argisht, Nik: no answer

// Gor
// true

// Mariam
// hasName return !!name=true

// 6) WHAT WILL BE THE OUTPUT AND WHY
// const obj1 = {
//     id: 1,
//     skills: ['js', 'css']
// }

// const obj2 = {
//     id: 2,
//     skills: ['js', 'css', 'html']
// }
// obj1.skills.push(obj2['skills'][2]);
// for (let i = 0; i < obj1.skills.length; i++) {
//     console.log(obj1.skills[i])
// }
// console.log(obj2.length);

// Argisht: no answer

// Gor
// 'js', 'css', 'html'
// undefined

// Mariam
// OBJ1 i meji skillsin avelacnel obj2i skillsi 2rd indexum gtnvox html@
// hertov tpel js css html

// Nik
// js,css,html after For Loop
// undefined` after clg(obj2.length) output will be 'undefined' because object haven't property like $.length 

// 7) WHAT WILL BE THE OUTPUT AND WHY
// function f(key) {
//     const obj = {
//         name: 'John',
//         id: 5,
//     }
//     if(obj[key] && obj[key] > 1) {
//         return obj['name']
//     }else {
//         obj[key] = null
//     }
//     return obj
// }
// console.log(f('id'));
// console.log(f('surname'));

// Argisht, Nik: no answer

// Gor
// 'John'
// { name: 'John', id: 5, surname: null } 

// Mariam
// console.log(f('id'));//verji true john
// console.log(f('surname'));//undefined

// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
