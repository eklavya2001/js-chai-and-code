//Immediately Invoked Function Expressions (IIFE), jab global scope ke chize kuch function ko immediately chaiye unhe pollute kar deta, we need iife

// function chai(){
//     console.log(`DB CONNECTED`)

// }
//chai()        // iife kisi function ko likhne k liye us pure function ko small braces() me dal do and function k last  curly braces ke bad ek () laga dena ha, hogaya iife

(function chai(){ // ye hua named iife
    console.log(`DB CONNECTED`) //DEKHO IIFE LAG GAYA, IS FUNCTION KO CALL BHI KARNE KA KAAM NAHI HA IIFE LAGAGNE K BAD WO ALREADY CALL HO RAHA HA , SYNTAX YAD RAKHNA
                                // FIRST () FOR FUNCTION DEFINITION AND SECOND () FOR EXECUTION
})();//------>ye semicolon bohot important ha ,nahi to next iife me error aayega, iife nahi janta h ki context rokna kaha ha

// NOW IIFE IN ARROW FUNCTIONS FORMAT// isme error aata agar upar me semicolon nahi lagate to
(()=>{
    console.log("db connected two ")
})();                                                      //or ye dono unnamed iife

((name)=>{
    console.log(`mujhe ${name} chaiye`)
})("eklavya")  // parameter aise diya karo