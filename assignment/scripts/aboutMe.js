// Small note for reviewers
// I have sorta picked up a habit of making every variable I can constant from
// doing a lot of things with functional programming, so don't expect `let` to
// show up too much.
// I also use string formatting a lot. Got into that habit from Python probably

// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstName = "Jaden"
// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName = "Pleasants"

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
//     Console log the value of `fullName`
const fullName = `${firstName} ${lastName}`
console.log(fullName)

// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
//     Console log the value of `luckyNumber`
const luckyNumber = 20
console.log(luckyNumber)

// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
const introduction = `My name is ${fullName} and I think ${luckyNumber} is a winner!`
console.log(introduction)

// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
//     Console log the value of `adventurous`
const adventurous = true
console.log(adventurous)

// 7 - Create a variable named `food`, and set its value to a string of your favorite food
//     Console log the value of `food`
const food = "Pizza"
console.log(food)

// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
//     Console log the value of `pets`
const pets = 1
console.log(pets)

// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
const friendsPets = 2

// 10 - Add two pets to your `pets` variable
console.log(pets + friendsPets)

// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 5

// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!",
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`
/** @type {string} */
let result = undefined
if (adventurous) {
  result = "Adventures are great!"
} else {
  result = "How about we stay home?"
}
console.log(result)

// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional:
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"
//      Console log the value of `diceRoll`
let diceRoll = "Try again later."
if (luckyNumber === 2 && adventurous) {
  diceRoll = "Roll the dice!"
}
console.log(diceRoll)

// 14 - Create a variable called `petStatus`.
//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets"
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets"
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"
/** @type {string} */
let petStatus = undefined
if (pets < allowedPets) {
  petStatus = "I can have more pets"
} else if (pets === allowedPets) {
  petStatus = "I have enough pets"
} else {
  petStatus = "Oh no, I have too many pets!"
}
console.log(petStatus)

// STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios.
//      console.log `mostPets` after the conditional has run.
// Typically I would just do this with sorting and slicing lists
// Since it's a stretch thing I will do it with functional programming instead
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const greater = (a, b) => (a > b ? a : b)
const mostPets = greater(pets, friendsPets)
console.log(mostPets)

// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.
let luckyResult = undefined
switch (luckyNumber) {
  case 1:
    luckyResult = "First is the worst"
    break
  case 2:
    luckyResult = "Second is the best"
    break
  case 3:
    luckyResult = "Third is the one with the polka dot dress"
    break

  default:
    luckyResult = "Luck is what happens when preparation meets opportunity"
    break
}
console.log(luckyResult)

// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!
result = adventurous ? "Adventures are great!" : "How about we stay home?"
console.log(result)

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== "undefined" ? firstName : undefined,
    lastName: typeof lastName !== "undefined" ? lastName : undefined,
    fullName: typeof fullName !== "undefined" ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== "undefined" ? luckyNumber : undefined,
    introduction:
      typeof introduction !== "undefined" ? introduction : undefined,
    adventurous: typeof adventurous !== "undefined" ? adventurous : undefined,
    food: typeof food !== "undefined" ? food : undefined,
    pets: typeof pets !== "undefined" ? pets : undefined,
    friendsPets: typeof friendsPets !== "undefined" ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== "undefined" ? allowedPets : undefined,
    result: typeof result !== "undefined" ? result : undefined,
    diceRoll: typeof diceRoll !== "undefined" ? diceRoll : undefined,
    petStatus: typeof petStatus !== "undefined" ? petStatus : undefined,
    mostPets: typeof mostPets !== "undefined" ? mostPets : undefined,
    luckyResult: typeof luckyResult !== "undefined" ? luckyResult : undefined,
  }
} catch (e) {
  // Do nothing
}
