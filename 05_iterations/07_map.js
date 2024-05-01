const myNumbers=[1,2,3,4,5,,6,7,8,9,10]
// sabke me 10 add karna ha, waise to ye bohot tarike se ho sakta ha
//myNumbers.forEach((nums)=>console.log(nums+10))  // this is also a way but ye array k form me nahi dega, and also ise kahi store karke return nahi kar sakte , ye to hum padh chuke h
// and jo empty ha myNumbers me use bhi ignore kar deta ha, therefore it's ok to think that maps is better than foreach

//const newNums=myNumbers.map((num)=>num+10) // ye array k form me bhi dega,and automatically return bhi karta ha, but scope open karoge to return likhna hi padega yaad rakhlo


const newNums=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)// isse chaining kehte h ,or jitna marzi utna laga sakte h inhe .  pehle map k bad num ka value 
                                                                                   //already ek array ho jaega and operation bhi ho jaega first map ka, lekin sab hone k bad 
//console.log(newNums)                                                               // hi newNums me store hoga
                                                                                // yaad rakho map sab return kar dega, but filter me jo true hoga wahi return hoga
                                          
                                                                                                                                                

const newNumbers=myNumbers.filter((num)=>num+10)// as num+10 is always true  therfore it prints whole of myNumbers and does no operation, therfore don't confuse bw map and filter
console.log(newNumbers)

//----------------------------------------------------------------------------------------------------------------------------------------------------

// Yes, exactly! "Map" and "map" are indeed different in JavaScript.

// Map (with uppercase "M"): Refers to the built-in Map object in JavaScript, which is used to store key-value pairs.
// map (with lowercase "m"): Refers to the built-in array method in JavaScript, which is used to transform elements of an array by applying a function to each element.
// The uppercase "Map" refers to a specific data structure (the Map object), while the lowercase "map" refers to a specific array method (the map method). They have different functionalities and usage patterns

//------------------------------------------------------------------------------------------------------------------------------------------------------------

const mynums=[1,2,3]

// const mytotal =mynums.reduce(function (acc, currentvalue){
//     console.log(`acc:${acc} and currentvalue:${currentvalue}`);
//     return acc+currentvalue
// },0)

const mytotal= mynums.reduce((acc , curval)=>acc+curval,0)
console.log(mytotal);

const shoppingcart = [
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python course",
        price:5999
    },
    {
        itemname:"android course",
        price:12999
    }
]
const pricetopay=shoppingcart.reduce((acc,item)=>item.price+acc,0)
console.log(pricetopay);



