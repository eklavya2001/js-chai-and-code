

//datatypes are classified :_kis tarah se memory me rakha jata ha or kis tarah se acces kiya jata ha :_primitive  and  non primitive(reference)
//primitive :- call by value : 7 types:- String, Number, Boolean, null(typeof me ye object deta ha) , undefined, Symbol, BigInt
// non -primitive(reference types) :- call by name : Array, Objects, Functions.(js master karne k liye objects and web events ka khas khayal rakho)

// js is a dynamically typed language

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)

let check = (id===anotherId)//ye false aayega, bcoz symbol use  hi tabhi hota h jab humko ek unique value chaiye.
console.log(check)

