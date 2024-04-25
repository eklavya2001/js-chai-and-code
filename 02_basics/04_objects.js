//will learn about how to create objects using constructors

//const tinderUser = new Object()// ye ek singleton object ha 
const tinderUser = {}          // ye singleton object nahi ha and baki no difference

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"eklavya",
            lastname:"mishra"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)//objects k andar k objects ko is tarah access kar sakte ha
// optional chaining: if fullname doesn't exist, we sometimes use "fullname?", we add a question mark which does some protection , we will learn it in backend from api response


const obj1={
    1:"a", 2:"b"

}
const obj2={
    3:"a", 4:"b"
}

//const obj3={obj1,obj2}// ye wahi array  k andar array wala problem de dega, so if we can't combine like this therfore niche dekho
//console.log(obj3)

const obj3={...obj1,...obj2}// ye ek tarika ha by using spread operator but or bhi tarike ha and maximum time yahi use karenge
console.log(obj3)

const obj4=Object.assign(obj1,obj2)// can be combined in both ways (obj4 and 5) but obj5 is better according to the documentation and gives the same output as spread operator
const obj5=Object.assign({},obj1,obj2)// jo empty parenthisis ha wo target ha or baki ha source waise compulsory nahi ha
console.log(obj4)
console.log(obj5)

// jab bhi database se values aayegi

const users= [
    {id:1,
    email: "h@gmail.com"},
    {id:1,
        email: "h@gmail.com"},
        {id:1,
            email: "h@gmail.com"}

    
]
users[0].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))//output in array datatype
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //array k andar array hoga with all the different keys and values in different arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'
))

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\
                                                      // destructuring of objects
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"eklavya"

}
//console.log(course.courseInstructor) 

const{courseInstructor}=course
console.log(courseInstructor)

const{coursename:name}=course//is tarah se object ko destructure hota ha
console.log(name)

/* api pehle xml format me aata tha lekin ab json format me aata ha(kbhi kbhi array ka form me bhi milta ha) , json ek object(object has a name) hi ha jise hum bad me kisi value me store karke usse data nikalte ha
{
"name": "eklavya mishra"
"id":"24092001"
}                                  ye kuch nahi ek tarah ka json hi ha


[
    {},
    {},           ye bhi ek tarah ka api format ha  jo array k form me ha
    {}
]
*/

