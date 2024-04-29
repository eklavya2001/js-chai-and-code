const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

// for iteration in objects we use for in loop
for (const key in myObject) {
    // console.log(key) // isse key print hoga sirf
    // console.log(myObject)  // isse pura object print ho jayega wo bhi 4 bar and you know why only 4 baar (common sense)
    // console.log(myObject[key])  // isse values print hongi , therfore correct way to iterate is (look next line),
    console.log(`${key} is the shortcut for ${myObject[key]}`)
   
}


const programming =["js", "rb", "py", "java","cpp"]  // arrays me sirf number hi keys hoti ha, or object bana hi isliye tha ki keys sirf number na
for (const key in programming) {
    // console.log(key)       // yaha key k nam par 0 to 4 print ho jayega
     console.log(programming)  // ye to pura array hi print kar dega 5 bar
    console.log(programming[key]) // isse values print hoga
   
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('fr', "France")
map.set('IN',"India") // do entries nahi hoga output me, maps apne unique values k liye jane jate ha, or order hamesha maintain karti ha

for(const key in map){
    console.log(key);  // ye kuch bhi output nahi dega, because it's not iterateable in this way
}