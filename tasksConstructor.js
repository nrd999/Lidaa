// 1) greq function constructor vorn kcarayi vorpes calculator
//    kancheluc kstana erku tiv, ev kunena gumarman hanman, bajanman ev bazmapatkman methodner
//    voronq kancheluc kveradarcni hamapatasxan gorcoxutyan arjeq@

// 2) greq function constructor vory kcarayi vorpes vayrkyanachap
//    kunena 3 method, start, stope ev reset ev kkatari hamapatasxan gorcoxutyunnery
//    kanchelov start method@ console-um ktpi 1,2,3 ev ayln (amen vayrkyan) ev ktpi aynqan minchev chenq kanchi stop method@
//    reset@ method@ kancheluc vayrkyannern kzroyana, ete vayrkyanachapn @ntacqi mej e reset chenq karox anel.
//    reset karox enq anel menak stop taluc heto

// 1) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     };
//
//     return {
//         name,
//         gender
//     }
// }
//
// let student1 = new Student('Poxos', true);
// console.log(student1.sayHi());

// 2) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     };
//
//     return this.name
// }
// let student1 = new Student('Poxos', true);
// console.log(student1.sayHi());

// 3) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = function() {
//         return `Hi ${this.name}`
//     };
// }
// let student1 = new Student('Poxos', true);
//
// let student2 = Object.assign({}, student1, {name: 'Petros'});
//
// student1.sayHi = () => `Goodbye ${student1.name}`;
// console.log(student1.sayHi());
// console.log(student2.sayHi());

// 4) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     };
// }
//
// let student1 = new Student('Poxos', true);
//
// let student2 = student1;
// student1.sayHi = () => `Goodbye ${student1.name}`;
// console.log(student2.sayHi());
// console.log(student1.sayHi());

// 5) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = function() {
//         return `Hi ${this.name}`
//     };
// }
//
// let student1 = new Student('Poxos', true);
// let student2 = new Student('Petros', true);
// let student3 = new Student('Martiros', true);
//
// student1.nested = student2;
// student2.nested = student3;
// console.log(student1.nested.sayHi());
// console.log(student1.nested.nested.sayHi());

