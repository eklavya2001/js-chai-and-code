//ICE CREAM KA FUNDA:- a kid can snatch icecream from a uncle but uncle can't do the reverse

function one() {
  const username = "eklavya";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website); // idhar uncle bacche se ice cream lene ki kosis kar rahe ha therfore error dega and
  // line by line code execute hota ha therefore niche k code execute nahi hoga, hence we comment this out

  two(); //now there will be no error and will print (eklavya), since baccha icecream(username) le sakta ha uncle se
}

one(); // but if we comment out two(), tab one() execute hoga but kuch output nahi dega

//------------------------------------------------------------------------------------------------------------------------------------------------------------

if (true) {
  const username = "eklavya";
  if (username === "eklavya") {
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website)  //hawsi uncle
}

//console.log(username)  //dur ke uncle

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//+++++++++++++++++++++++interesting+++++++++++++++++++++++++(javascript me variables super powerful hote , they can hold json, function and many moree)

// function addone(num){
//     return num+1
// }

// addone(5)

// const addTwo= function(num){  // this is also a function but more like an expression(sometimes)
//     return num+2
// } 
// addTwo(5)

/*abhi dono function run ho raha ha bade aaram se but aage dekho*/

console.log(addone(5)); // ye bhi run ho jayega jab hum is function ka declaration se upar bhi de dein to but , niche dekho
function addone(num) {
  return num + 1;
}

//addTwo(5); //jab hum isse bhi waise hi karte h tab error aata ha bcoz of hoisting of functions in different ways 
//abhi k liye itna samjho ki upar ka case me hum declartion se pehle access kar sakte ha but niche k case me nahi
// console.log(addTwo(5))
// const addTwo = function (num) {
//   return num + 2;
// };