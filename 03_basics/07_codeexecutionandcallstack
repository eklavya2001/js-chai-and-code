//interview perspective video
//1>EXECUTION CONTEXT(EC)
//JS RUNS PROGRAM IN 2 PHASE::-SABSE PEHLE JO BANEGA GOLBAL EC,IS REFFERED TO 'this' VARIABLE, BROWSER KA GLOBAL EC IS SLIGHTLY DIFFERNET FROM NODE BUT BROWSER IS MOST IMP
// BROWSER ME THIS KI VALUE WINDOW OBJECT AATI HA,JS IS SINGLE THREADED
//SABSE PEHLE GLOBAL EC
// DUSRA, FUNCTION EC
// TISRA EVAL EC, YE MOSTLY MONGOOSE ME PADHENGE(PROPERTY OF GLOBAL OBJECT)
// JS RUNS IN 2 PHASE:1> MEMORY CREATION PHASE :- VARIABLES K LIYE MEMORY ALLOCATE HOTA HA
// 2>EXECUTION PHASE  
// CONFUSION TO HA HI , EK EXAMPLE SE SAMJHO
let val1=10                                        //phase 1>global execution(enviroment), sabse pehle allocate kiya jata 'this' k andar
let val2=5                                         //phase 2> memory creation phase(cp, or mcp, mp):- sare variables ko ikathta kiya jata ha or bas rakha jata ha, val1->undefined rakha jayega , similar for val2, 
                                                   //     add num->defination
function addNum(num1,num2){                        // result 1-> undefined, similar for result 2
    let total = num1+num2                          // first cyle hoga hi hoga
    return total                                    // phase 2(execution phase): val1<-10, val2<-5, addnum me kuch nhi hoga coz wo defination me hi ho gaya 
                                                // result1>addnum>naya ec banega(new variable enviroment+execution thread), jitne bar bhi function execute hote ha utne bar naya box create hota use kehte ha new execution context, phir wapas se 
}                                                  // do kaam waps se honge 1>memory creation phase, 2> execution phase 
let result1= addNum(val1, val2)                     // memory phase, val1->undefined , val2-> undefined, total->undefined ab iske bad execution context, num1->10, num2->5, total->15 ab total return hoga global ec me
let result2=addNum(10,2)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CALL STACK ::  lifo:- last in first out