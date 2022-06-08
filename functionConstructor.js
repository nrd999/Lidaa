// ------------------------ FUNCTION CONSTRUCTORS ------------------------
// let student1 = {
//     name: 'Gor',
//     gender: false,
// };
// 
// let student2 = {
//     name: 'Mariam',
//     gender: true
// };

// -----------------------------------------------------------------------
// patkeracnenq senc mi function
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }

// let x = 5;
// let y = new Number(5);

// console.log(x,y);
// let student1 = new Student('Gor', false);
// // console.log(student1);
// let student2 = new Student('Mariam', true);
// console.log(student1);
// console.log(student2);

// -----------------------------------------------------------------------
// we can create objects with function constructors
// function Calc(num1, num2) {
//     this.add = function () {
//         return num1 + num2
//     };
// }

// let result = new Calc(5, 5);
// console.log(result.add());
// 1. erb new-ov kanchum enq datark objecta stexcvum veragrvuma this-in
//   arjeqnery vergarvum en ev veradarcvuma object@

// ------------------------ return ------------------------
// return with other object
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// let student1 = new Student('Gor', false);
// console.log(student1);

// return with primitive
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;

//     return 5
// }
// let student1 = new Student('Mariam', true);
// console.log(student1);

// ------------------------ methods in constructor ------------------------
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;

//     this.sayHi = function()  {
//         return `Hi ${this.name}`
//     }
// }
// //
// let student1 = new Student('Mariam', true);
// let student2 = new Student('Gor', false);
// console.log(student1.sayHi());
// console.log(student2.sayHi());

// ------------------------ example ------------------------
// function Cart() {
//     this.products = [];
//     this.sumOfPrice = 0;
//
//     this.addProduct = (product) => {
//         this.products.push(product);
//         this.sumOfPrice += product.price;
//     };
//
//     this.getProductsCount = () => {
//       return this.products.length;
//     }
// }
// const cart = new Cart();

// console.log(cart);
// cart.addProduct({name: 'wine', price: 200});
// console.log(cart);
// cart.addProduct({name: 'apple', price: 300});
// console.log(cart.products);
// console.log(cart.getProductsCount());
// console.log(cart.sumOfPrice);

// -----------------------------------------------------------------------
// we can change price and products
// same example with private property

// function Cart() {
//     let products = [];
//     let sumOfPrice = 0;

//     this.addProduct = (product) => {
//         products.push(product);
//         sumOfPrice += product.price;
//     };

//     this.getProducts = () => {
//         return products
//     };

//     this.getSumOfPrice = () => {
//         return sumOfPrice
//     };

//     this.getProductsCount = () => {
//         return products.length;
//     }

// }
// const cart = new Cart();

// cart.addProduct({name: 'wine', price: 200});
// cart.addProduct({name: 'apple', price: 300});
// console.log(cart.getProductsCount());
// console.log(cart.getProducts());
// console.log(cart.getSumOfPrice());

// ------------------------ js constructors ------------------------
// let arr = new Array();
// let obj = new Object();
// let num = new Number();
// let bool = new Boolean();
// let str = new String();

// Date();
// new Date();
// let date = new Date();

// console.log(date);



