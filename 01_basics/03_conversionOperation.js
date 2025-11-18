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

console.log(typeof bread); // object
console.log(bread); // 0

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

// for Number
// 33 => 33
// 45abc => NaN
// harsh => NaN
// true => 1; false => 0

// for Boolean
// 1 => true; 0 => false
// "" => false
// "Harsh" => true

let someNumber = 33
let numberInString = String(someNumber)

console.log(typeof numberInString);
console.log(numberInString);

//************************************* OPERATIONS *****************************//

let val = 3
let negVal = -val

console.log(negVal)

let str1 = "Hello"
let str2 = " Harsh"

let str3 = str1 + str2

console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
//console.log(true+) => ERROR

console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not a good practice

let gameCounter = 100

++gameCounter
console.log(gameCounter)

gameCounter++
console.log(gameCounter)