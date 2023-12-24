//Memory are of two types Stack and heap 
//stack(primitve) ,heap(non-primitive)
//jab bhi stack memory use karte ha to uska iska matlab jo bhi aapne variable declare ki ha aapko uska copy milta ha but  in hea we get reference of
// original value ie jo bhi hum change karenge wo original value me change hoga
//eg
let x = "eklavya"//it is a string variable therfore its memory is located in stack becoz its a primitive variable

let y =x

y="monu"

console.log(y)

console.log(y)

console.log(x)



let userOne ={
    email:"eklavya@gmail.com",

    upi: "user@123"
}
let userTwo= userOne

userTwo.email="mankubhaiya@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
