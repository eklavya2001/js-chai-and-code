const score =400

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)//agar tum string bana doge to har wo kam kar paoge jo string ka sath karte ho

console.log(balance.toFixed(2)) 

const no= 23.5678

console.log(no.toPrecision(4))// ye aayega 23.57
console.log(no.toPrecision(2))// ye 24 dega            kull mila k precise value deta ha
console.log(no.toPrecision(3))// ye 23.6 dega   

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// agar en-IN nahi likhoge tab us standard k hisab se aayega or ye likhne se india k according

//***********************************************************     MATHS  ************************************ *

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.1))
console.log(Math.floor(3.9))
console.log(Math.min(4,6,1))
console.log(Math.max(4,10,6))

console.log(Math.random())

let max= 3
let min =1

let x= (max-min)*Math.random()+1
console.log(Math.round(x))