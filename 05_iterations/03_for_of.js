// // for of
// // ["","",""]
// // [{}, {}, {}]

// const arr =[1,2,3,4,5]

// for (const element of arr) {                      // for-of jaruri nahi h ki sirf object pe hi lage(noobs ko aisa hi lagta ha) , yaha object prototype ka bat hota ha
//     console.log(element)                          // ye 1 se 5 tak print kar dega, or for-of loop string wagera kisi pe bhi laga sakte ha
// }

// // const greetings = "Hello World!"
// // for (const element of greetings) {
// //     console.log(`Each char is ${element}`)  // ye har ek character including the space between hello and world ko bhi print kar dega
    
// // }
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

// console.log(map)

for (const element of map) {
    // console.log(element)     // ye array bana k de dega [key, value] or agar hame wo nahi chaiye , hame sirf data chaiye to neeche dekho lal
}

for (const [key, value] of map) {   // bada interesting syntax ha, ab yaha hame key and values ek proper data k form me mil jayega object ka
    //console.log(key,':-', value)
    
}



const myObject = {
    'game1':"NFS",
    'game2':"spiderman"
}
for (const [key, value] of myObject) {           // is prakar se normal object nahi iterate ho sakte h even if 'game1' key k jagah tum game1 likho , phir bhi nahi
    console.log(key,':-',value)
    
}