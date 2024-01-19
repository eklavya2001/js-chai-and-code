//array

const arr= [1,2,3,"false",4,5]//array declare karne ka tarika
console.log(arr[1])
const myHeros=["shaktiman","nagraj"]
const arr2=new Array(1,3,5)//declare karne ka dusra tarika

//Array methods
arr.push(6)//ye last me jorega 
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(10)//ye starting me push karega but large no of values k time pc pe load parega ,similary like push 
console.log(arr)//shift , similary pop karega lekin starting se

console.log(arr.includes(10))//ye check karne k liye, similarly 

console.log(arr.indexOf(9))//ye 9 de ya 19 always -1 hi dega bcoz ye values array me ha hi nahi

const newArr= arr.join()//ye array o string me convert kar deta ha
console.log(newArr)
console.log(typeof newArr)

//slice, splice:: slice original array me change nahi lata h, and splice original array me change lata ha and this is the main difference also 
//                slice me pura range nahi cover hota ha last se but splice me pura range cover hota ha(legit)


console.log("A ",arr)
const myn=arr.slice(1,3)
console.log(myn)

console.log("B",arr)

const myn2= arr.splice(1,3)
console.log(myn2)
console.log("C" ,arr)
