// # Primitive Data types

// 7 types : String, NUmber, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false, symbols are unique

// const bigNumber = 1234567890123456789012345678901234567890n

// refrence (non - primitive)

// array, objects,  functions

const heroes = ["shakitman", "nagraj", "doga"]

let myObj = {
    name : "raghav",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");

}

console.log(typeof myFunction);

// //Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "raghavdevdotcom"

let anothername = myYoutubename
anothername = "rayzeee"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi : "user@upi"
}

let userTwo = userOne;

userTwo.email = "raghav@google.com"

console.log(userOne.email);
console.log(userTwo.email);
