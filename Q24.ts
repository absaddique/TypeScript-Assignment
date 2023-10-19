let fluid:string = "water";

console.log(`is fluid == "water"  | i predict true`);
console.log(fluid == "water");

console.log(`is fluid == "mercury" | i predict false`);
console.log(fluid == "mercury");

console.log(`is "water == mercury.toLowerCase() | i predict true`);
console.log("water" == fluid.toLowerCase());

const num:number = 25

console.log(`num == 25 | i predict true`);
console.log(num == 25);

console.log(`num !== 24 | i predict true `);
console.log(num !== 24);

console.log(`num > 20 | i predict true`);
console.log(num>20);

console.log(`num < 20 | i predict false`);
console.log(num<20);

console.log(`num >= 20 | i predict true`);
console.log(num>=20);

console.log(`num <= 20 | i predict true`);
console.log(num<=20);

console.log(`num < 20 && num <30 | i predict true`);
console.log(num<20 && num<30);

console.log(`num <= 20 || num<10 i predict false`);
console.log(num<=20 || num<30);

const number:number[]= [34,23];

console.log(`is number.includes(34) | i predict true`);
console.log(number.includes(34));


console.log(`is number.includes(45) | i predict false`);
console.log(number.includes(45));

