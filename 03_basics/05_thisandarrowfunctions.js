const user = {
    username:"eklavya",
    price:999,

    welcomeMessage: function(){
               console.log(` ${this.username}welcome to website`)// but we write this.username for current context and ye imp ha aise hi hona
    }
}

user.welcomeMessage() //object k andar k function aise acces karte ha yad rakhna
console.log(user.username)// and normal variables k liye traditional method

 user.username="sam"// ab humne idhar context change kar diya,(context kch nahi ha , values hi ha),
user.welcomeMessage()

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// const user = {
//     username:"eklavya",
//     price:999,

//     welcomeMessage: function(){
//                console.log(`${this.username} welcome to website`)// but we write this.username for current context and ye imp ha aise hi hona
//                console.log(this)//es this ne hame sare current context k bare me bata diya of both eklavya and sam  
//     }
// }

// user.welcomeMessage()


// user.username="sam"// ab humne idhar context change kar diya,(context kch nahi ha , values hi ha),
// user.welcomeMessage()

//---------------------------------------------------------------------------------------------------------------------------------------------------------

// const user = {
//   username: "eklavya",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} welcome to website`); // but we write this.username for current context and ye imp ha aise hi hona
//     console.log(this); //es this ne hame sare current context k bare me bata diya of both eklavya and sam
//   },
// };

//console.log(this)//ye empty object dega , jab aap node enviroment ha tab aapka this refer kar raha ha empty object ko, kunki abhi global k andar context hi nahi ha isiliye empty
//but jab hum browser me console.log(this) ka output window dikhai dega, or idhar empty object ha but why?
//bcoz pehle k samy me js ko execute sirf browser k andar kiya jata tha,ab bohot sare ha node, bun , dino engine ha
//to jab browser k andar run hota ha to sabse jada jo global object ha wo window object (imp)
//or agar abhi is wale console.log(this) ko comment out kar deta hu tab kuch bhi output nahi dega

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function chai(){
//     let username="eklavya"
//     console.log(this)// console.log(this.username)  :- ye undefined dega iska matlab ye this.username object me use kar sakte ha but function me undefined dega
// }
// chai() //isme bohot sara value aayega,ek global value,microtask , structure clone, perfomance valuation

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const chai= function(){
//     let username="eklavya"
//     console.log(this.username)   //function kaise bhi banao this.username undefined hi dega
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ****** ab arrow function dekho
// const pani = () => {
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const myArray=[2,5,3,7]
//myArray.forEach(()=>{})


//rati ratai baatein:- normal function me this use hota ha or arrow function me this use nahi hota , agar koi bole arrow function and normal function k difference puche, bekar ki baatein