// 1) greq function vorn stanum e object ev stugum datark e te voch ---> hampatasxan veradardznelov true kam false
// function checksTheContets (obj) {
//     return Object.keys(obj).length === 0;
// }

// console.log( checksTheContets( {name: "Gor"} ) ); 

// let x=function(obj){
//     if(obj!==undefined){ 
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
//     // for(let key in obj) {
//     //     return true
//     // }

//     // return false

// }
// console.log(x({}))

// 2) greq function vorn stanum e nerqevum nshvac  object@ ev hashvum bolor ashxatoxneri ashxatavardzeri gumar@

// let x=function(obj){
//     let res = 0;
//     for(let value in obj) {
//         res += parseInt(obj[value])
//         }
//     return res
// }
// console.log(x({John: '100$', Arthur: '200$', Thomas: '1000$'}), "$");

// 3) greq function vorn stanum e object ev veradardznum mek ayl object vortex klinen naxord objecti number value-neri krknapatiknery
// orinak ete stacel enq {price: 100, name: 'John'} kveradardzni --> {price: 200, name: 'John'}

// let x = function(obj){
//     let obj2 = {};
//     for(let value in obj) {
//         if(typeof obj[value] === "number") {
//             obj2[value] = obj[value] ** 0
//         } else obj2[value] = obj[value] 
//     }
//     return obj2;
//  }
// console.log(x({price: Infinity, name: 'John'}))

// function returnDouble (obj) {
//     let obj2 = Object.assign({}, obj);

//     Object.keys(obj2).forEach(key => {
//         if (typeof obj2[key] === 'number') {
//             obj2[key] += obj2[key];
//         }   
//     });

//     return obj2
// } 

// console.log( returnDouble({price: 400, name: 'John', age: 15}) );

// 4) greq function vorn stanum e object ev veradarcnum mek ayl object vortex values keyov klinen stacvac objecti value-nern arrayov
//    isk keys keyov stacvac objecti keyer@ arrayov,
//    orinak stanum e {id: 5, name: 'John'} kveradardzni --> {values: [5,'John'], keys: ['id', 'name']}

// function sortsKeysAndValues (obj) {
    // const obj2 = {
    //     values: [],
    //     keys: []
    // }

    // Object.entries(obj).forEach(arr => {
    //     obj2.values.push(arr[1]);
    //     obj2.keys.push(arr[0]);
    // })

    // return obj2;
//     return {
//         keys: Object.keys(obj),
//         values: Object.values(obj)
//     }
// }

// console.log( sortsKeysAndValues({id: 5, name: 'John'}) );

// 1) WHAT WILL BE THE OUTPUT AND WHY
// let person = {
//     name: 'John',
//     surname: 'Smith',
//     friends: ['empty', undefined]
// }
// let str = '';
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         str += key
//     }
// }

// console.log(str);

// 2) WHAT WILL BE THE OUTPUT AND WHY
// const person = {
//     knowladges: ['programming', 'driving'],
//     child: {
//         name: 'John',
//         surname: 'Smith'
//     }
// }
// console.log(typeof person.child['name'])
// console.log(typeof person.knowladges)

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     name: 'John',
//     surname: 'Smith'
// }

// const value = Object.values(obj);
// value.push(obj.id);
// console.log(value);

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     name: 'John',
//     surname: 'Smith'
// }

// const keys = Object.keys(obj);
// console.log(keys.length)

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj1 = {
//     id: 1,
//     name: 'John',
//     surname: 'Smith'
// }
// let obj2 = {
//     id: 5,
//     isTest: false,
//     person: {
//         gender: 'man',
//     }
// }
//
// const obj = Object.assign(obj1, obj2);
// console.log(obj.id);
// const anotherObj = Object.assign(obj1, obj2);
// anotherObj.person.skills = ['fight'];
// console.log(obj1.person.skills)

// function camelCase (str) {
//     let arr = str.split('');
//     arr[0] = arr[0].toUpperCase();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "_") {
//             arr[i] = "";
//             arr[i + 1] = arr[i + 1].toUpperCase();
//         }
//     }

//     return arr.join('')
// }

// console.log( camelCase("get_element_by_id") );