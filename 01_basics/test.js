function Vehicle(make, model) {
  this.make = make;
  this.model = model;
  this.displayInfo = function () {
    console.log("This vehicle is a " + this.make + " " + this.model);
  };
}
let car = new Vehicle("toyota", "fortuner");
car.displayInfo();

// // var car = Vehicle('Toyota', 'Camry'); // aise nahi hoga because of 'new' keyword
// // car.displayInfo();

// for (var i = 0; i < 3; i++) {
//     setTimeout((function(x) {
//         return function() {
//             console.log(x);
//         };
//     })(i), 1000);
// }

function outer() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var functions = outer();
functions[0]();
functions[1]();
functions[2]();

let a = (num1, num2) => {
  return num1 + num2;
};
console.log(a(2, 4));
let b = (name) => {
  return `my name is ${name}`;
};
console.log(b("eklavya"));

// function detail (name, age){
//     this.name=name;
//     this.age=age;

//     this.output=()=>{console.log(`my name is ${this.name}, and my age is ${this.age}`)};
// }
// let details = new detail('eklayva','18')
// console.log(details)
// details.output()

//Modify the detail function to include a new property called gender. Update the constructor call accordingly to include this new property.
// function detail(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;

//   this.output = () => {
//     console.log(
//       `my name is ${this.name}, and my age is ${this.age} and my gender is${this.gender}`
//     );
//   };
// }
// let details = new detail("eklayva", "18");
// console.log(details);
// details.output();
//Create a method within the detail function that calculates and returns the year of birth based on the current age. Use this method to display the year of birth along with the name and age
// function detail (name, age){
//     this.name=name;
//     this.age=age;

//     this.output=()=>{console.log(`my name is ${this.name}, and my age is ${this.age}`)};
//     this.birthyear=()=>{
//         let currentyear=2024
//         let yob=currentyear-this.age
//         console.log(`my year of birth is ${yob}`)
//     }
// }
// let details = new detail('eklayva','18')

// details.output()
// details.birthyear()

//Implement a validation mechanism inside the detail function to ensure that the age provided is a positive number. If the age is not positive, throw an error.
// function detail (name, age){
//     this.name=name;
//     this.age=age;
    

//     this.output=()=>{
//     if(this.age<=0){console.log("you entered a wrong age")}
//     else{console.log(`my name is ${this.name}, and my age is ${this.age}`)}

// };
// }
// let details = new detail('eklayva','-2')
// //console.log(details)
// details.output()

//Create another object representing a different person's details and compare the ages of the two people. Display a message indicating who is older
// function detail (name, age){
//     this.name=name;
//     this.age=age;

//     this.output=()=>{console.log(`my name is ${this.name}, and my age is ${this.age}`)};
// }
// let details1 = new detail('eklayva','18')
// let details2= new detail('mayank',28)
// if(details1.age>details2.age){console.log("eklavya is older")}
// else{console.log("mayank is older")}

// const tinderUser = {}          // ye singleton object nahi ha and baki no difference

// tinderUser.id="123abc"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn= false

// console.log(tinderUser.name)

// function abc(...input){return input}
// console.log(abc(1,2,3))

// let iife=((num1, num2)=>{return num1 + num2})(5,6)
// console.log(iife)

// for(let i=0; i<=10 ; i++){
//   console.log(`table of ${i}`)
//   for(let j=0; j<=10; j++){console.log(`${i} `+`*`+`${j} `+`= `+`${i*j}`)}
// }


// function printTree(height) {
//   // Loop through each level of the tree
//   for (let i = 1; i <= height; i++) {
//       let treeRow = '        ';

//       // Add spaces for indentation
//       for (let j = 0; j < height-i ; j++) {
//           treeRow += '' ;
//       }

//       // Add asterisks for the branches
//       for (let k = 0; k < 2 * i - 1; k++) {
//           treeRow += '*';
//       }

//       console.log(treeRow);
//   }
// }

// // Call the function with the desired height of the tree
// printTree(5); // Change the height as needed


// function ree(height){
//   for(let i=1; i<height; i++){
//     let spaces =''
//     for(let j=height-i; j>0; j--){
//       spaces=spaces-' '
//     }
//     for(let k =2*i-1; k>0; k--){
//       spaces=spaces+'*'
//     }
//     console.log(spaces)
//   }
// }
// ree(10)


// function ultatree(height){
//   for(let i = 0; i < height; i++){
//     let spaces = '';
//     for(let j = height - i; j > 0; j--){
//       spaces += ' ';
//     }
//     for(let k = 2 * i - 1; k > 0; k--){
//       spaces += '*';
//     }
//     console.log(spaces);
//   }
// }

// ultatree(10);

// function printRightAlignedTree(height) {
//   for (let i = 1; i <= height; i++) {
//       console.log(' '.repeat(height - i) + '*'.repeat(i));
//   }
// }
// printRightAlignedTree(5)


// function printPyramidTree(height) {
//   for (let i = 1; i <= height; i++) {
//       console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
//   }
// }
// printPyramidTree(5);


// function printChristmasTree(height) {
//   for (let i = 1; i <= height; i++) {
//       console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
//   }
//   console.log(' '.repeat(height - 1) + '*');
// }
// printChristmasTree(5);

// function printZigzagTree(rows) {
//   for (let i = 1; i <= rows; i++) {
//       let row = '';
//       for (let j = 1; j <= rows; j++) {
//           if (j === i || j === rows - i + 1) {
//               row += '*';
//           } else {
//               row += ' ';
//           }
//       }
//       console.log(row);
//   }
// }
// printZigzagTree(6);

// function printHourglassTree(rows) {
  // for (let i = 1; i <= rows; i++) {
  //     let row = '';
  //     for (let j = 1; j <= i - 1; j++) {
  //         row =row+ ' ';
  //     }
  //     for (let k = 1; k <= 2 * (rows - i) + 1; k++) {
  //         row += '*';
  //     }
  //     console.log(row);
  // }
//   for (let i = rows - 1; i >= 1; i--) {
//       let row = '';
//       for (let j = 1; j <= i - 1; j++) {
//           row += ' ';
//       }
//       for (let k = 1; k <= 2 * (rows - i) + 1; k++) {
//           row += '*';
//       }
//       console.log(row);
//   }
// }
// printHourglassTree(5);


function printTree(height){
  for(let i =0; i<=height; i++){
    let gap =''
    for(let j=0; j<height-i; j++){
      gap += ' '
      
    }
    for(let k =1; k<=2*i-1; k++){
      gap += ''+'*'
      
    }
    console.log(gap)
  }
}

printTree(5)

function tree(height){
  for(let i=1; i<=height; i++){
    // let row=' '
    // let star='*'
    console.log(' '.repeat(height-i)+'*'.repeat(2*i-1))
  }
}
tree(5)

function printPyramidTree(height) {
  for (let i = 1; i <= height; i++) { // i 1 se lena bcoz repeat negative values nahi leta
      console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
  }
}
printPyramidTree(5);

// function ultatree(height){
//      for(let i=1; i<=height; i++){
//       console.log(' '.repeat(i-1)+'*'.repeat(height-i+1))
//      }
// }
// ultatree(5)
function ultatree(height){
  for(let i=1; i<=height; i++){
      console.log(' '.repeat(i-1)+'*'.repeat(height-i+1));
  }
}
ultatree(5);
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('fr', "France")
map.set('IN',"India") // do entries nahi hoga output me, maps apne unique values k liye jane jate ha, or order hamesha maintain karti ha

console.log(map)

for (const element of map) {
    console.log(element)     // ye array bana k de dega [key, value] or agar hame wo nahi chaiye , hame sirf data chaiye to neeche dekho lal
}

for (const [key, value] of map) {   // bada interesting syntax ha, ab yaha hame key and values ek proper data k form me mil jayega object ka
  console.log(key,':-', value)
  
}

const myObject = {
  'game1':"NFS",
  'game2':"spiderman"
}
// for (const [key, value] of myObject) {           // is prakar se normal object nahi iterate ho sakte h even if 'game1' key k jagah tum game1 likho , phir bhi nahi
//   console.log(key,':-',value)
  
// }

const tinderUser = {}          // ye singleton object nahi ha and baki no difference

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false

console.log(tinderUser)

console.log(Object.keys(tinderUser))//output in array datatype
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //array k andar array hoga with all the different keys and values in different arrays
