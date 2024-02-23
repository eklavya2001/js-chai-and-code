const coding=["js", "java", "python ","ruby", "cpp"]


//const values =coding.forEach((item)=>{console.log(item)})
//console.log(values) // jo values ha array ka wo to print kar dega lekin koi bhi value return  nahi karega(undefined dega), agar return item likh bhi de to bhi nahi hoga

const values =coding.forEach((item)=>{// console.log(item);  // abhi bhi undefined hi dega
    return item})
   // console.log(values)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   const myNums=[1,2,3,4,5,6,7,8,9,10]
 //  myNums.filter( (num)=> num>4) // for each jaisa hi operation ha, but ye values ko return karta ha


//  const newNums=  myNums.filter( (num)=> num>4)           
//  console.log(newNums) // ye return karega [5,6,7,8,9,10]
// // jab bhi hum filter use karte ha, to filter k andar aapko ek callback function milega, jiske andar har value ko each access kiya jayega,
// or uske baad aapko deni padti ha ek conditon, jo jo log us condition ko satisfy karenge, wo wo vlaues to return ki jayegi warna nahi hogi retunr



 //const newNums=  myNums.filter( (num)=>{ num>4}) 
 //console.log(newNums) // ye ek empty [] return kar deta ha, pata nahi kyun?, iska alternate niche dekho

//  const newNums=  myNums.filter( (num)=>{  return num>4}) 
//  console.log(newNums) //ab upar wala problem solve hua , is bar {return num>4}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// lekin yahi cheez for each se karna mushkil h bcoz wo kch return nahi karta ha, then how will we do it using for each ( niche dekho niche)

// const newNums =[]

// myNums.forEach((num) =>{
//     if (num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums) //now this will also give the same output [5,6,7,8,9,10], but logic lagana padta ha

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const Books =[
   {title:"Book1",genre:"Science",publish:2001  , edition:2024},
   {title:"Book2",genre:"History",publish:2005  , edition:2024},
   {title:"Book3",genre:"Science",publish:1985 , edition:2024},
   {title:"Book4",genre:"History",publish: 1971 , edition:2024},
   {title:"Book5",genre:"Fiction",publish:1999  , edition:2024},
   {title:"Book6",genre:"Science",publish:2010  , edition:2024},
   {title:"Book7",genre:"Fiction",publish:2022  , edition:2024},
   {title:"Book8",genre:"NonFiction",publish:1983  , edition:2024},
   {title:"Book9",genre:"Science",publish: 1976 , edition:2024},
   {title:"Book10",genre:"NonFiction",publish: 1994 , edition:2024}
]

let UserBooks=Books.filter((bk)=>bk.genre==="History")

UserBooks=Books.filter((bk)=>{return bk.genre==="Science"&&bk.publish>=2000})  // whenever we use scope we have to mention return , and this is how filter returns output
console.log(UserBooks)