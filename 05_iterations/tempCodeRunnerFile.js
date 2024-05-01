
// console.log(yCoding[0].languageName)
// yCoding.forEach((Element)=>{console.log(Element.languageFileName)})


const vowels=['a','e','i','o','u']
const str="Hey JS! You R AMAZING";
let lowercase=str.toLowerCase()
let a =Array.from(lowercase)
console.log(a)
a.forEach((item)=>{
    let count =0
    vowels.includes(item)&&count++; 
    
    return count
})
//console.log(numofvowels)