

//datatypes are classified :_kis tarah se memory me rakha jata ha or kis tarah se acces kiya jata ha :_primitive  and  non primitive(reference)
//primitive :- call by value : 7 types:- String, Number, Boolean, null(typeof me ye object deta ha) , undefined, Symbol, BigInt
// cts and web eventsnon -primitive(reference types) :- call by name : Array, Objects, Functions.(js master karne k liye obje ka khas khayal rakho)

// js is a dynamically typed language

const id =Symbol('123')         // symbols are different from each other, irrespective of their equal values
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)

let check = (id===anotherId)//ye false aayega, bcoz symbol use  hi tabhi hota h jab humko ek unique value chaiye.
console.log(check)

let arr = ["cat", "dog", "tiger"]
let x =(typeof arr)
console.log(x)

let fn = function abc(){console.log("baigan")}
let y=(typeof fn)
console.log(y)//ye function dega, more like a object function

let obj={name:"monu", id:540, car:'ciaz'}
let z = (typeof obj)
console.log(z)


/*
jitna bhi non-primitive ha uska typeof object hi milta ha(mostly) and for primitive use documentation
 */