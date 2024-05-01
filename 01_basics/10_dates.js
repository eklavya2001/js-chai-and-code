let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())

console.log(myDate.toLocaleString('en-IN'))
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())
let date= new Date("01-14-2023")
console.log(date.toLocaleDateString())


let myTimeStamp = Date.now()// yaha sab se jo time aata ha wo ms me aata ha so s me lane ka liye divide by 1000 and usko round off kardo line no 20
console.log(myTimeStamp)
console.log(date.getTime())


console.log(Math.floor(Date.now()/1000))


let nayaDate = new Date()
console.log(nayaDate.getMonth())



console.log(nayaDate.toLocaleString('default',{weekday:"long"}))//customize karke date and time likhne ka tarika, we shall remember this.

