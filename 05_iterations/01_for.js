//for

// for (let index = 0; index < array.length; index++) {  // curly braces yani block scope yani , jo bhi variables iske andaar declare hoga wo bahar use me nahi aayega
//     const element = array[index];
    
// }

for(let i=0; i<=10; i++){
    const element = i;
    if(element ==5){console.log("5 is the best number")}
  //  console.log(element)
}

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop output : ${i}`)
//    for (let j = 0; j <=10; j++) {                     // outer loop pehle ek bar chalega , inner loop 10 bar chalega , fir outer loop dusre bar chalega and inner loop fir 10 bar chalega and so on
// console.log(`inner loop value:${j}`)    
//    }
    
// }

// Q>print tables from 1 to 10

// for(let i=0; i<=10; i++){
//    console.log(`${i} ka table`)      //this is how we can print tables 
//     for(let j=0; j<=10; j++){
//         console.log(`${i}`+`*`+`${j}`+ `=` +`${i*j}`)

//     }
// }

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)//which is 3 therefore index < myArray.length only works because index <= myArray.length  me index 3 to ha hi nahi therfore <= ki jageh only < use karte ha
// for (let index = 0; index < myArray.length; index++) {
//     // const element = myArray[index];
//     console.log(myArray[index])// ye array ke values ko print karega
//     console.log(myArray)//ye array ko as it is print karega
    
// }


// sometimes we need to stop the loop, therefore we use "break " and "continue"

// for(let i=0; i<=20; i++){
//     if(i==5){
//         console.log("5 detected")
//         break;
//     }
//     console.log(i)
// }

for(let i=0; i<=20; i++){
    if(i==5){                         // copy karne ka shortcut alt+shift+downarrow
        console.log("5 detected")
        
        continue;
    }
    console.log(i)
}