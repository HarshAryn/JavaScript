let score = "33"
let marks = "45abc"

console.log(typeof score);
console.log(typeof(score));

console.log(typeof marks);
console.log(typeof(marks));

let valueInNum = Number(score) //Capital N
let valueInNumber = Number(marks)

console.log(typeof valueInNum);

console.log(typeof valueInNumber);

console.log(valueInNum);

console.log(valueInNumber); // NaN => Not a Number

let eggs = null
let bread = Number(eggs)

console.log(typeof bread);
console.log(bread);

let banana = undefined
let apple = Number(banana)

console.log(typeof apple);
console.log(apple);

let chicken = true
let fish = Number(chicken)

console.log(typeof fish);
console.log(fish);

let names = "harsh"
let roll = Number(names)

console.log(typeof roll);
console.log(roll);
