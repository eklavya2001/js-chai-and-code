let score = 33 /*
                               conversion techniques
if score = null  and if you convert it into number it will show zero
if score = undefined  , it will show nan
if score =true , it will show 1
if score ="any string " it will give nan

*/

console.log(typeof score);

 score ="33"

 console.log(typeof score)

 newScore=Number(score);

 console.log(newScore)
 console.log(typeof newScore)

 let skore = "33abc"

 let valueInNumber=Number(skore)

 console.log(typeof valueInNumber)//this will say its a number 

 console.log(valueInNumber);// but this will give nan

 let a= undefined;
 console.log(a)//undefined dega, simili
 console.log(typeof a)//type bhi undefined hi hoga

 let isLoggedIn = 1// if isLoggedIn ="" then value will come false, and if the value is a string then it comes true

 let booleanIsLoggedIn = Boolean(isLoggedIn)

 console.log(booleanIsLoggedIn);

 let someNumber = 33;
 let stringNumber= String(someNumber)// ye number ko string banane ka tarika
 console.log(stringNumber)
 console.log(typeof stringNumber)


