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

console.log(typeof eggs) // object
console.log(eggs) // 0

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

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true / 0 => false
// "" => false
// "Harsh" => true

let someNumber = 33
let numberInString = String(someNumber)

console.log(typeof numberInString);
console.log(numberInString);
