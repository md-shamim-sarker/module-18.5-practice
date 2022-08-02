/*
let x = '10';
let y = 5;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

console.log('--------------------------');

let p = '10';
let q = 10;

console.log(p == q); //true
console.log(p != q); //false
console.log(p === q); //false
console.log(p !== q); //true

console.log('--------------------------');

console.log(5 > 4 && 8 > 7 && 6 > 7); // false
console.log(5 < 4 || 8 > 7 || 6 > 7); // true
*/

let myAmount = 10000;

if (myAmount > 80000) {
    console.log('Buy a Mac.');
} else if (myAmount > 60000) {
    console.log('Buy Gaming Laptop.');
} else if (myAmount > 40000) {
    console.log('Buy Lenovo Yoga.');
} else if (myAmount > 20000) {
    console.log('Buy Used Laptop.');
} else {
    console.log('Use my mobile phone.');
}