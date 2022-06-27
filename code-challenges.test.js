// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("altTogether", () => {
  it("that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () =>  {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  expect(altTogether(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."
    ])
  })
})

    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    // FAIL  ./code-challenges.test.js
    // altTogether
    //   ✕ that takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

    // ● altTogether › that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

    //   ReferenceError: altTogether is not defined

// b) Create the function that makes the test pass.

// create a function called altTogether that takes a paramenter of an array 
// The function will take an array of objects and returns an array with all the objects together and the the name of the person is capitalized.
 

//  const newArray = Object.values(people)
// console.log(newArray)

// const altTogether = (array) => {
//   let newArray = Object.values(array)
//   return newArray
// }
// console.log(altTogether(people))
// I found this method and it turns the keys and or values into strings. 

/// Create a function called altTogethger that will take a paramenter of an array that will take an array of objects and return an array and return an sentence
/// Have it return the array with the method .map
/// Create a new variable that will capitalize the names 

const altTogether = (array) => {
  return array.map(value => { 
    let kapitalK = value.name.split(" ").map(valor => valor[0].toUpperCase() + valor.slice(1)).join(" ")
  return `${kapitalK} is ${valor.occupation}`
})
}

console.log(altTogether(people))

// I cant get this to work, its saying valor is not defined. 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided

describe ("rem", () => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(rem(hodgepodge1)).toEqual([2, 0, -1, 0 ])
    expect(rem(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// ● rem › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: rem is not defined

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

  // Create a function called rem that will take a parameter of an array
  // Use method .filter that will only select the values of the array we need, for this one we only want numbers
  // Use method .map that will take the numbers selected by method .filter
  // Use modulo % and divide by three 


const rem = (array) => {
  let lilMix = array.filter(value => typeof value === 'number')
  return lilMix.map(value => value % 3)

}
console.log(rem(hodgepodge1))
console.log(rem(hodgepodge2))






// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe ("gameCube", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      const cubeAndSum1 = [2, 3, 4]
      const cubeAndSum2 = [0, 5, 10]
      expect(arrCube(buceAndSum1)).toEqual("99")
      expect(arrCube(cubeAndSum2)).toEqual("11255")
  })
})

// const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// I keep getting the same error as last time -Your test suite must contain at least one test-.  It was working perfectly for the first two tests and I when I tried testing those again I got the same error. 

// b) Create the function that makes the test pass.

//Create a function called gameCube that will take an array as a parameter
// The function will will return the sum of all numbers together cubed 
// Use method .map that will iterate through the numbers in the array and cube them 
// Use methos .reduce that will sum all the numbers together
    // method reduce will take all the numbers in an array and reduce them into a single value. I was thinking about using .join  and then adding them but this is much easier


const gameCube = (array) => {
  let iceCube = array.map(value => value ** 3) 
 return iceCube.reduce((a,b) => a + b)
}
console.log(gameCube(cubeAndSum1))

console.log(gameCube(cubeAndSum2))