// =========== OBJECTS ===========

// let arr = [];

// let arr2 = new Array();

// let obj = {};

// let obj1 = new Object();

// console.log(typeof obj);
//---------------------------------

// --------object is key, value collection--------
// let obj = {
//     name: 'John',
//     age: 15,
//     gender: true,
//     15: 7,
//     1: 6,
// }

// console.log(obj);

// let arr = [1, 5, 6]
// console.log(arr);

// ---- keys are strings -----
// let obj = {
//     'age': 15,
//     'name': 'John'
// }

// ------- Get, Add, Delete, Change property ----------

// ------Get-----
// let car = {
//     color: 'black',
//     isDriven: true,
//     doors: 4
// }
// // //
// let carColor = car.color;
// let isCarDriven = car.isDriven;
// let doorsCount = car.doors;
// //
// console.log(carColor, isCarDriven, doorsCount)

//------ Get with [] ------
// let user = {
//     gender: 'woman',
//     age: 20,
//     weight: 100,
//     name: 'Ketrin',
// }
// // user.name
// let username = user['name'];
// let age = user['age'];
// console.log(username, age);

// ----- we cant get value without string in [] -------

// let userWeight = user['name'];
// let userGender = user['age'];
// console.log(userWeight, userGender);

// --------- we can get it with variable -------
// let key = 'age';

// console.log(user['age']);
// console.log(user[key]);

// -------- we can get key which doesn't exist -----
// let user = {
//     gender: 'woman',
//     age: 20,
//     weight: 100,
//     name: 'Ketrin',
// }
// console.log(user.country)

//  --------- Delete property --------
// let movie = {
//   name: 'John Wick',
//   durationHour: 2,
//   isBest: true
// }

// delete movie.durationHour;
// // let arr = [1,3,'str']
// // for(let key in movie) {
// //     console.log(key);
// // }
// console.log(movie);

// --------- Set Property ---------
// let obj = {
//     id: 1,
// };

// obj.age = 54;

// console.log(obj)

// ------ set with [] -----
// obj['name'] = 'John';

// console.log(obj)

// ------- we can set key, and value with variable --------
// let key = 'name';
// let value = 'John';

// const obj = {
//     key: value
// }

// const obj = {
//     [key]: value
// }

// console.log(obj);

// //----------------------
// let key = 'name';
// let value = 'John';

// const obj = {}

// obj[key] = value;

// console.log(obj);

// --------- Change Property ---------

// let home = {
//     rooms: 4,
//     hasPool: false,
//     wallsColor: 'red'
// };

// home.wallsColor = 5;
// // or
// // home['hasPool'] = true;

// // console.log(home);

// // ----------- functions in object -----------
// let user = {
//     id: 1,
//     name: 'John',
//     gender: 'man',
//     canWalk: true,
//     // getAge: function () {
//     //     return 18
//     // },
//     getAge: () => 18,
// }

// // console.log(user.getAge);
// console.log(user.getAge())

// let user = {
//     id: 1,
//     gender: 'man',
//     canWalk: true,
//     getUsername: function () {
//         return user.name
//     },
//     name: 'John',
// }
// //
// // console.log(user.getUsername);
// console.log(user.getUsername());


// ---------- arrays in objects -----------

// let user = {
//     name: 'John',
//     gender: 'man',
//     skills: ['js','html']
// }
// // //

// let arr = user.skills
// console.log(user.skills);
// console.log(user.skills[0]);

// ------- object in objects -------

// let user = {
//     name: 'John',
//     gender: 'man',
//     skills: {
//         canCode: true,
//         projects: 100,
//     }
// }

// console.log(user.skills);
// console.log(user.skills.projects);

//------------------------------
// let user = {
//     name: 'John',
//     gender: 'man',
// }

// user.skills = {};
// user.skills.projects = 100
// // console.log(user.skills);
// delete user.skills
// console.log(user);
//------------------------------------------
// function setObject(name,age) {
//     let obj = {
//         name: name,
//         age: age
//     }
//    return obj
// }

// console.log(setObject('John', 40));
// console.log(setObject('Tom', 10));

// function setObject(name,age) {
//     let obj = {
//         name,
//         age
//     }

//     return obj
// }

// console.log(setObject('John', 40));
// ----------------------------------------
// let student1 = {
//     id: 1,
//     name: 'Nik',
// };

// let student2 = {
//     id: 2,
//     name: 'Gor',
//     skills: ['html', 'js']
// }

// student2.skills.map(item => console.log(item))

// student1.skills = [...student2.skills];
// student1.age = 20
// student1.skills.push('css')

// console.log(student1, student2);

// 1.put student2 skills to student 1
// 2.push css to student2 skills (check reference)

// --------------------------------------------

// let user = {
//     id: 1,
//     canWalk: (age) => {
//         if(age > 2) {
//             return true
//         }else {
//             return false
//         }
//     }
// }

// 1. shorten the function

// function canWalk(age) {
//     if(age > 2) {
//         return true
//     }else {
//         return false
//     }
// }
//
// let user = {
//     id: 1,
//     // canWalk: canWalk,
// }

// how we should call the function;
