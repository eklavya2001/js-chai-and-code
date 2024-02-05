// //HAMESHA EK CODE NAHI CHALNA CHAIYE , JAB TUM LOGIN HO TO ALAG CODE CHALNE CHAIYE , JAB LOGOUT KAR RAHE HO TAB ALAG CODE CHALNA CHAIYE
// //if
// /*if(condition){
//     //curly braces hi scope ha, condition must be true tabhi scope ka code execute hoga, agar conditon false hoga tab code execute nahi hoga
// }*/

// // ek ' = ' vaulues assign karta ha, ' == ' , this is for check, '===' for strict check(ye type bhi check karta ha)

// if(2=="2"){
//     console.log("executed")

// }

// //but

// if(2==="2"){// ye hua strict check including types
//     console.log("not executed")
// }
// const temperature=41
// if(temperature<50){
//     console.log("less than 50")

// }
// else{console.log("temperature is greater than 50")}

// const score =200

// if(score>100){
//     const power="fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)//ye bolega power is not defined, error dega, bcoz curly braces k andar jo bhi variable decalre hota h uska scope global nahi hota ha, functional hota ha
// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const score =200

// if(score>100){
//     var power="fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)//ab y error nahi dega, bcoz var always stays in global scope, but let and const me aisa nahi hoga

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const balance=1000
// if(balance>500) console.log("test");// yaha curly braces nahi use kiye, ye concept ha implicit scope ka, but ' ; ' lagana zaruri ha nahi to error dega

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const balance=1000
// if(balance>500) console.log("test"),
// console.log("test 2");// or agar multiple lines likhna chahe to wo bhi comma laga k likh sakte ha, but semicolon must be present , but this is unreadable code (not good)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const balance=1000
// if(balance>1200){
//     console.log("balance is high")

// }
// else if(balance<800){
//     console.log("fakir ho tum")

// }
// else{console.log("dawab bana hua ha")}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const userLoggedIn = true
const debitCared= true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCared && 2==2){
    console.log("you can go shopping")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user can login")
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
