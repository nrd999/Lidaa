// Web APIs - https://developer.mozilla.org/en-US/docs/Web/API

// 1) greq function vorn stanum e 2 number argument from ev to, orinak 4, 8 ev tpum e vayrkyan@ mek from-ic to tvery; orinak stanum e 4,8  tpum e 4,5,6,7,8

// Nik
// function fromTo(from, to){
//     // let count = from;
//     let timerId = setInterval(() => {
//         if(from === to){
//             clearInterval(timerId)
//         }
//         console.log(from++)
//     }, 1000)
// }
// fromTo(4,8)

// Gor
// function printNum (from, to) {
//     let timerId = setInterval(() => {
//         if (from === to) {
//             clearInterval(timerId);
//         }
//         console.log(from);
//         from++;
//     }, 1000)
// }
// printNum(4, 8);

// ------ Answer ------
// function f(from, to) {
//     let timerId = setInterval(() => {
//         console.log(from);
//         from++;
//         if(from > to) {
//             clearInterval(timerId)
//         }
//     }, 1000)
// }
// f(3,6);

// 2) greq function vorn stanum e PATAHAKAN GENERACVAC tiv 0,10 mijakayqum ev ete stacvac tivy mec e 5-ic  ayd tvin hamapatasxan vayrkyan heto tpum eayd tiv@
//   orinak stanum e 7 uremn 7 vayrkyan heto ktpi 7.

// Nik
// function numb(){
//     let random = Math.floor(Math.random() * 10);
//     if(random >= 5){
//        setTimeout(() => console.log(random), random*1000)
//        return random
//     }
//     else return `${random} is small than 5`
// }
// console.log(numb())

// Gor
// function printRandomNum (num) {
//     if (num > 5) {
//         console.log(num);
//         setTimeout(() => console.log(num), num * 1000);
//     }
// }

// printRandomNum(Math.round(Math.random() * 10))


// ------ Answer ------
// function f(num) {
//     num > 5 && setTimeout(() => console.log(num), num * 1000)
// }

// f(Math.round(Math.random() * 10));

// 1) WHAT WILL BE THE OUTPUT AND WHY
// let x = 5;
// setTimeout(() => console.log(x), 1000);
// x += 1;

// Nik
// Output will be 6, and another 6 after second

// 2) WHAT WILL BE THE OUTPUT AND WHY
// let x = 0;
// setTimeout(() => console.log(x), 0);
// x++;

// Nik
// Output will be 0, in the same moment but after 0 will be 1(bcz x++ next line);

// 3) WHAT WILL BE THE OUTPUT AND WHY
// function f(num) {
//     console.log(num);
//     clearInterval(timerId)
// }

// let x = 2;

// let timerId = setInterval(() => f(x), x * 1000);

// Nik
// Output will be first undefined bcz we don't have return in function, and only after 2 seconds will be 2 due to 'console.log'

// 4) WHAT WILL BE THE OUTPUT AND WHY
// function setTimer(canSet) {
//     console.log(1)
//     if(canSet) {
//         console.log(2)
//         setTimeout(() => setTimer(false), 1000)
//     }else {
//         console.log('this is recursion')
//     }
// }
// setTimer(true)

// Nik
// Output will be (1,2, //after '1' sec// 1,'this is recursion')
// Bcz function setTimer(true) due to if will console.log(2), after will check our setTimеout()=> setTimer function with argument (false)` after 1 sec, and due our 'false' argument if operator will check else step, so we will have aforenamed output.

// ------------- this -------------
// 1) greq function vorn stanum e array cankacac elementnerov (nayev krknvox)
//    ev veradarcnum e object, vortex key valueov nshvac e te tvyal elmentic qani hat ka arrayum
//    orinak f(['a', 'b', 'c', 'b', 'a', 'a']) ---> {a: 3, b: 2, c: 1} petqa asxhati voch menak stringneri arrayov ayl cankacac

// Gor
// function foo (arr) {
    // const obj = arr.reduce((aggr, val) => {
    //     if (aggr[val] === undefined) {
    //         aggr[val] = 1;
    //     } else {
    //         aggr[val]++;
    //     }
    //     return aggr;
    // }, {})

    // return obj;

//     // or

    // const obj = {};
    // arr.forEach(val => {
    //     if (obj[val] === undefined) {
    //         obj[val] = 1;
    //     } else {
    //         obj[val]++;
    //     }
    // })
    // return obj;
// }

// console.log( foo([undefined, 20, true, undefined, 'a', 'a', 20]) );

// ---------- ANSWER ----------
// function f(arr) {
//     let resultObj = {};
//     arr.forEach(item => {
//         if(!resultObj[item]) {
//             resultObj[item] = 1
//         }else {
//             resultObj[item]++
//         }
//     })
//     return resultObj
// }
// console.log(f(['a', 'b', 'c', 'b', 'a', 'a']));

// 2) greq function vor@ stanum e objectneri array vortex nshvac en inchvor apranqner, apranqneri qanak, goyutyun uni te voch
// ev arjeq (arjeq@ verabervum e 1 apranqin), function@ piti veradarcni @ndhanur goyutyun unecox apranqneri gumar@
// (nman funkcianer en ashxatum cankacac online arevtri kayqerum erb add enq anum apranqy karzina u nshuma qanak verjum cuyca talis inchqan piti vcharenq)
// orinak f(
    // [
    // {name: 'snikers', quantity: 2, price: 200, doesExist: false},
    // {name: 'coca-cola', quantity: 5, price: 100, doesExist: true},
    // {name: 'lays', quantity: 1, price: 100, doesExist: true},
    // ]
// ) kveradarcni 600, vorovhetev goyutyun uni 5 hat coca-cola amen meky 100 u 1 hat lays 100

// Gor
// function sayGeneralPrice (arr) {
//     let res = 0;
//     arr.forEach(obj => {
//         if (obj.doesExist) {
//             res += obj.quantity * obj.price;
//         }
//     });
//     return res;
// }

// console.log( sayGeneralPrice(
//     [
//     {name: 'snikers', quantity: 2, price: 200, doesExist: false},
//     {name: 'coca-cola', quantity: 5, price: 100, doesExist: true},
//     {name: 'lays', quantity: 1, price: 100, doesExist: true},
//     ]
// // ) );

// // ---------- ANSWER ----------
// // function f(arr) {
// //     let sum = 0;
// //     for (let obj of arr) {
// //         if(obj.doesExist) {
// //             sum += obj.quantity * obj.price
// //         }
// //     }
    
// //     return sum
// // }

// // console.log(f([
// //     {name: 'snikers', quantity: 2, price: 200, doesExist: false},
// //     {name: 'coca-cola', quantity: 5, price: 100, doesExist: true},
// //     {name: 'lays', quantity: 1, price: 100, doesExist: true},
// //     ]));

// // 3) greq function vory kstana nshvac array@ arajin argumentov
// //    ev kstana 2 rd argument objecti keyeric mek@, ev kveradarcni object vortex
// //    xmbavorvac klinen studentnern @st poxancvac keyi
// //    orinak f(students, 'gender') kveradarcni
// // {
// //     true: [{}, {}]--> bolor ayn studnetnnery voronc gender@ true e
// //     false: [{}, {}] ---> bolor ayn studentnnery voronc gender@ false e
// // }

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

// // Gor
// function zoo (arr, key) {
//     const res = {};
//     let resKey;
//     arr.forEach(obj => {
//         if (obj[key] !== undefined) {
//             resKey = obj[key];
//             res[resKey] = [];
//         }
//     });
//     console.log(res);
//     arr.forEach(obj => {
//         Object.keys(res).forEach(val => {
//             let str = "" + obj[key];
//             if (str === val) {
//                 res[val].push(obj);
//             }
//         })
//     })

//     return res;
// }

// console.log(zoo(students, 'gender') );

// ---------- ANSWER ----------
// function f(students, groupByKey) {
//     let obj = {};
//     students.forEach(item => {
//         const groupByValue = item[groupByKey];
//         if(!obj[groupByValue]) {
//             obj[groupByValue] = [];
//         }
//         obj[groupByValue].push(item)    
//     })
//     return obj
// }
// console.log(f(students, 'name'));

// 1) WHAT WILL BE THE OUTPUT AND WHY
// function foo () { console.log(this.a) }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();

// 2) WHAT WILL BE THE OUTPUT AND WHY
// let foo = () => {
//     console.log(this.a)
// }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     foo: 'bar',
//     func: function () {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (() => {
//             console.log(this.foo);
//             console.log(self.foo);
//         })()
//     }
// }
// obj.func();

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let student = {
//     name: 'John',
//     methods: {
//         name: 'Wick',
//         getName: function () {
//             console.log(this.name)
//         }
//     }
// }
//
// let obj = student.methods.getName();

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     getId: (id) => console.log(this.id++)
// }
//
// obj.getId = function (id) {console.log(this.id++)}
// obj.getId(5);
// obj.getId(5);

// 6) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     getId: function () {
//         console.log(this.id)
//     }
// }
//
// let obj1 = Object.assign(obj, {id: 2});
// obj.getId()
// obj1.getId()

// function getAverageOfMiddleNums(arr,arr1){
//     let result = arr.concat(arr1);
//      result = result.sort((a,b) => a-b);
//     console.log(result)
//     if(result.length%2===0){
//         let ind = result.length/2
//         return (result[ind]+result[ind-1])/2
//     }
//     else return result[((result.length+1)/2)-1]
// }
// getAverageOfMiddleNums([7,12],[5,1,2])