//const pani = () => {
//   let username = "eklavya";
//   console.log(this); //jab sirf this likhoge tab object aayega({}) and jab this.username likhoge tab undefined dega
// };                    
// //pani()

// const addTwo =( num1,num2)=>{
//     return num1+num2                                    //isme return lagana par raha ha to ye hua (explicit return)
// }
// console.log(addTwo(5,6))

// const addtwo =( num1,num2)=>  num1+num2 // ye bhi arrow function likhne ka tarika ha (implicit return )
// console.log(addtwo(10,12))

// const Addtwo =( num1,num2)=> (  num1+num2 )// ye bhi arrow function likhne ka tarika ha (implicit return ), agar curly braces lagate ho to return likhna parega else doesn't required
// console.log(Addtwo(12,12))

// //now if we have to return an object

// const bc=(num1, num2)=> ({username:"eklavya", id:24092001})//object return karne k liye chotes brackets k andar curly braces deke
// console.log(bc(2,5))