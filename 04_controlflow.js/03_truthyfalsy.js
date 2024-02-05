// const userEmail="h@gmail.ai"
// if(userEmail){                       // hame nahi pata ki useremail true ha ya nahi,but string ko by default true le liya
//     console.log("got user email")

// }
// else{
//     console.log("dont have user email")
// }
const userEmail=""
if(userEmail){                       
    console.log("got user email")
                                           // ab idhar userEmail empty ha,use by default false , but contradictorily empty array true hota ha
}
else{
    console.log("dont have user email")
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// falsy values:- false,  0 , -0 , BigInt 0n , "" , null, undefined, NaN ,  ye sabhi values falsy baki sab truthy
// surprise truthy values:-"0"- ye truthy ha, 'false'- ye bhi truthy value ha, " "- ye bhi truthy ha(empty braces me agar gap bhi de doge tab bhi true ha), [],{}, function(){}


// how to check that an array or object is empty or not
const emptyArray = []
if(emptyArray.length===0){
    console.log("Array is empty")
}

const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1=5 ?? 10
console.log(val1);

val1=null??10
console.log(val1)

val1=undefined ??15

console.log(val1);

val1= null ?? 15 ?? 20
console.log(val1)


//Terniary operator

//  condition ? true : false
const icePrice=100
icePrice >=80? console.log("more than 80"): console.log("less than 80")