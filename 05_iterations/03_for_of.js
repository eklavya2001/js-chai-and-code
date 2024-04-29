// // for of
// // ["","",""]
// // [{}, {}, {}]

// const arr =[1,2,3,4,5]

// for (const element of arr) {                      // for-of jaruri nahi h ki sirf object pe hi lage(noobs ko aisa hi lagta ha) , yaha object prototype ka bat hota ha
//     console.log(element)                          // ye 1 se 5 tak print kar dega, or for-of loop string wagera kisi pe bhi laga sakte ha
// }

// const greetings = "Hello World!"
// for (const element of greetings) {
//     console.log(`Each char is ${element}`)  // ye har ek character including the space between hello and world ko bhi print kar dega
    
// }
// const greetings = "Hello World!"
// for (const element of greetings) {
//     if(element==" "){continue}                 // agar space k bina print karna ho toh
//     console.log(`Each char is ${element}`)  
    
// }

// maps: object('key': "value") hi ha but ye order yaaad rakta ha,and normal object order yaad nahi rakhte
//A Map's keys can be any value (including functions, objects, or any primitive).,	The keys of an Object must be either a String or a Symbol.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('fr', "France")
map.set('IN',"India") // do entries nahi hoga output me, maps apne unique values k liye jane jate ha, or order hamesha maintain karti ha

console.log(map)

for (const element of map) {
    console.log(element)     // ye array bana k de dega [key, value] or agar hame wo nahi chaiye , hame sirf data chaiye to neeche dekho lal
}

for (const [key, value] of map) {   // bada interesting syntax ha, ab yaha hame key and values ek proper data k form me mil jayega object ka
    console.log(key,':-', value)
    
}



const myObject = {
    'Game1':"NFS",
    'game2':"spiderman"
}
// const myObject = new Object()
// myObject.game1="nfs"
// myObject.game2="spiderman"
for (const [key, value] of Object.entries(myObject)) {           // is prakar se normal object nahi iterate ho sakte h even if 'game1' key k jagah tum game1 likho , phir bhi nahi
    console.log(key,':-',value)
    
}
//-------------------------------------------------------------------------------------------iske aage practice ha



let y=["eklavya","mayank" , {housename:"ekchua", housename2:";manku"},{age1:23, age2:25}, 10 , (num1,num2)=>{return num1+num2}]
console.log(y)
for(const element of y){console.log(element)}
let p=y[5]
let x=p(10,20)
console.log(x)

let n=y[2].housename
console.log(n)

let t={
    name:"eklavya",
    age:25,
    sum:(name)=>{return  `my name is ${name}`},
    arr:["dubey", "chobey", 10]


}
let u=t.sum("eklavya")
console.log(Object.entries(t))
console.log(u)

for(const element of Object.entries(t)){
    console.log(element)
}