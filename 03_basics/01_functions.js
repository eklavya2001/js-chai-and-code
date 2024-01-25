// console.log("E")
// console.log("k")
// console.log("l")
// console.log("a")
// console.log("v")
// console.log("y")
// console.log("a")

function sayMyName(){console.log("E")
console.log("k")
console.log("l")
console.log("a")
console.log("v")
console.log("y")
console.log("a")

}

//sayMyName()

// function addTwoNumbers(number1,number2){  //small bracket ke andar jo doge wo hua parameters
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)//or yaha jo doge wo hua arguments
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,"null")

//const result =addTwoNumbers(3,5)
//console.log(result) //ye undefined aayega
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addtwonumbers(number1,number2){
        let result= number1+number2
        return result   //no further code will be executed after return, we could have also written(    return number1+number2;    ) which would have given a similar value
        console.log("eklavya")//this will not be executed as this is after return(unreachable code detected)
}
const result=addtwonumbers(3,5)
console.log("Result : ", result)
console.log("result : " , addtwonumbers(3,2))

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function loginmessage(username="sam"){
    if(username===undefined){console.log("Please enter your username"); return}
    return `${username} just logged in!`
}
console.log(loginmessage("eklavya"))
console.log(loginmessage(""))
console.log(loginmessage())//ye bolega "undefined just logged in"