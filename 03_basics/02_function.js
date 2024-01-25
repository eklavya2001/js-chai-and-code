function calculateCartPrice(...num1) {
  //ye rest operator ha , (spread operator and rest operator same dikhta ha) ye laga dene se sabhi value(multiple input) ko array ke form me pack kar deta ha
  return num1;
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 400, 500));

function calculatecartprice(val1,val2, ...num2){return num2}
console.log(calculatecartprice(200, 300, 5000, 2000))// is bar function return karega kewal [5000,2000] for num2-------important interview questions

const user={
  username:"eklavya",
  price:199

}
function handleobject(anyobject){
  console.log(`username is ${ anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)//abhi to ho jayega lekin agar price k jagah kisi object me "prices" ha tab undefined de dega 
handleobject({username:"mayank", price:199})

const myNewArray=[100,200,300,500]
function returnarray(getArray){return getArray[1]}
console.log(returnarray(myNewArray))