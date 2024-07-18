var binatang = "sapi";
let age = 25;
const nama = "John Doe";
console.log( "let const var:", '\n',binatang, age, nama);


let text = "Hello, World!"; // String
console.log( "tipe data:", '\n', typeof text);
let number = 100;           // Number
console.log( typeof number);
let isValid = true;         // Boolean
console.log( typeof isValid);
let data = null;            // Null
console.log( typeof data);
let notDefined;             // Undefined
console.log( typeof notDefined);
let person = { name: "Jane", age: 30 }; // Object
console.log( typeof person);
let numbers = [1, 2, 3, 4, 5];           // Array
console.log( typeof numbers);

let a = 10;
let b = 5;
let sum = a + b;        // 15
console.log( "operator aritmatika:", '\n', sum ); 
let difference = a - b; // 5
console.log(difference); 
let product = a * b;    // 50
console.log(product); 
let quotient = a / b;   // 2
console.log(quotient); 
let remainder = a % b;  // 0
console.log(remainder); 

let x = 10;
let y = "10";

console.log( "operator perbandingan:", '\n', x == y);  // true (loose equality)
console.log(x === y); // false (strict equality)
console.log(x != y);  // false
console.log(x !== y); // true
console.log(x > 5);   // true
console.log(x <= 10); // true