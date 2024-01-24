//objects ko declare karne ke do tarike , ek literal ki tarah or ek constructor ki tarah
// singleton : koi bhi construction se jab aap object banante ha to singleton ek object banta ha, jab hum literals se declare karnge tab singleton nahi banega

// objects with literals 
//Object.create: aise constructor ke case me banaya jata ha , idhar wo baat nahi karenge, niche literals use kar k banayenge abhi


const user1={ name:"eklavya" ,  // name is the key here and eklavya is the value and we can access both unlike arrays
age: 18,
"full name": "eklavya mishra",
location:"kolkata",
email:"eklavyamishra@google.com",
isLoggedIn: false,
lastLoginDays:["monday", "saturday"]


}
console.log(user1.email)//ye ek tarika h access karne ka, or maximum time yahi use karenge
//console.log(user1[email])  ///// ye dusra tarika h but ye error dega bcoz key values by default string hota ha therefore "email" likhne pe sahi value dega
console.log(user1["email"])

// console.log(user1.full name) // yaha error aaega and we can't access here therefore only dusra tarika works 
console.log(user1["full name"])


// symbol ko object me use karne ka alag hi syntax ha
// Q> ek symbol declare karo or usko object me key value me store karke print karke dikhao
const sym= Symbol("key1")

const user2={
    sym :"mykey1"
}
console.log(user2["sym"])
console.log(typeof user2["sym"])// ye string dega and not symbol , therefore aise nahi hoga 

const user3={
    [sym]:"mykey1"
}
console.log(user3[sym])
console.log( typeof user3[sym])
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

user1.email="mankubhaiya@gmail.com"// objects ki values aise change hota ha
console.log(user1["email"])
//we can also lock a particular value
//Object.freeze(user1)// ye ab user 1 ke sare values freeze kar dega, ab agar change karenge to koi error nahi dega but values change nahi honge
user1.email="ekchua@gmail.com"
console.log(user1)
console.log(user3)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
user1.greeting= function(){console.log("Hello user1")}

console.log(user1.greeting)//idhar function execute nahi hoga sirf reference aayega
console.log(user1.greeting())// agar freeze kar diye ho to error dega therefore unfreeze kar k dekho, function execute ho jayega

user1.greeting2= function(){console.log( `Hello user1,${this.name}`)}
console.log(user1.greeting2())