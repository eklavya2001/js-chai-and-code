const name="eklavya"// declare string 1
const repoCount=50

console.log(name+repoCount+"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)// use this syntax this is mordern and better

const gameName= new String('ekc-hua')

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('3'))
console.log(gameName.indexOf('h'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-1, -5))// not working right now, slice ke andar negative values use kar sakte h

const newString="        eklavya          "
console.log(newString)
console.log(newString.trim())

const url ="https://eklavya.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('eklavya'))
console.log(url.includes('sundar'))

let x = new String('eklavay-kumar-mishra')
let y = new String('mayank     kumar     mishra')// hum chahte h ki ye teeno letter alag ho jaye upar me with respect to dash and niche me space

console.log(x.split('-'))
console.log(y.split('     '))//gap ka length ekdam specifically dena ha just like yaha 5 ha

let check = x.split('-')
console.log(typeof check)