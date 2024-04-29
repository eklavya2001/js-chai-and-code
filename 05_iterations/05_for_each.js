const coding=["js", "java", "python ","ruby", "cpp"]
// coding.forEach( function (val){               // yaha callback function use hota ha, therfore no name is required
// console.log(val)
// })

// coding.forEach((item)=>{                      // similarly for arrow to
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)

// }
//coding.forEach(printMe)   // function ka reference dena ha usko execute nahi kar dena ha , coding.forEach(printMe()) ye nahi karna ha

coding.forEach((item, index, arr)=>{        // doubt :- ye arr ko apne aap kaise array of coding samajh liya , sochne wala baat ha(ye chutiya sawal hua, coding.foreach to likh hi diya ho)
    console.log(item, index,arr[0])
})

const myCoding = [
    {languageName: "javascript",
languageFileName: "js"},

    {languageName: "java",
languageFileName: "java"},

    {languageName: "python",
languageFileName: "py"}
]

//myCoding.forEach((item)=>{console.log(item.languageName)})  // array k andar jo objects jo ki complex chiz ha, this is how we take access (very imp)


const yCoding = [
    {languageName: "javascript",
languageFileName: "js"},

    {languageName: "java",
languageFileName: "java"},

    {languageName: "python",
languageFileName: "py"}
]

// console.log(yCoding[0].languageName)
// yCoding.forEach((Element)=>{console.log(Element.languageFileName)})


const a=[function(name){ return console.log(`name is ${name}`)},function(){console.log("mayank")},{name1:'eklavya',name2:'mayank'}]
//console.log(a)
//a.forEach((element)=>{element[0]("eklavya")}) -> ye galat 
// a.forEach(element => {
//     if (typeof element === 'function') {    -> ye sahi, bcoz element ko presume kar rahe ho ki wo function hi ha, 
//         element("eklavya");
//     }
// });


//a.forEach((element)=>{element[1]()})//Actually, jo tum kar rahe ho, element[1] ko call kar rahe ho, woh sahi nahi hai kyunki har element ek function nahi hai. Pehle do elements seedhe functions hain, lekin teesra element ek object hai.