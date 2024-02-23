const coding=["js", "java", "python ","ruby", "cpp"]
// coding.forEach( function (val){               // yaha callback function use hota ha, therfore no name is required
// console.log(val)
// })

// coding.forEach((item)=>{                      // similarly for arrow to
//     console.log(item)
// })


function printMe(item){
    console.log(item)

}
//coding.forEach(printMe)   // function ka reference dena ha usko execute nahi kar dena ha , coding.forEach(printMe()) ye nahi karna ha

coding.forEach((item, index, arr)=>{        // doubt :- ye arr ko apne aap kaise array of coding samajh liya , sochne wala baat ha
   // console.log(item, index,arr)
})

const myCoding = [
    {languageName: "javascript",
languageFileName: "js"},

    {languageName: "java",
languageFileName: "java"},

    {languageName: "python",
languageFileName: "py"}
]

myCoding.forEach((item)=>{console.log(item.languageName)})  // array k andar jo objects jo ki complex chiz ha, this is how we take access (very imp)



