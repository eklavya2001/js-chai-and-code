const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heros.push(dc)//ye array k  andar array bana dega and thats a problem for us
//console.log(marvel_heros)
//console.log(marvel_heros[3][0]) //ye tarika ha array k andar ke array me se kisi element ko access kar sakte ha but not a good way

//marvel_heros.concat(dc)
//console.log(marvel_heros)//same output as push and still it's a problemtatic situation

let allHeros=marvel_heros.concat(dc)//so this is how we join two arrays, and combine in new(concat use kiye idhar bhi but yaha ek variable me store kiye ha)
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc]// ye ha spread operator jo object ko copy karna ke bhi kaam aata ha
console.log(all_new_heros)

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(/*yaha tum depth de sakte ho */ Infinity)
console.log(real_another_array)


console.log(Array.isArray("eklavya"))//ye false dega
console.log(Array.from("eklavya"))//ye saare letters ko array ke andar convert kar dega 




