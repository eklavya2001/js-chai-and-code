// const one=document.getElementById('box1')
// one.addEventListener('click',()=>{document.body.style.backgroundColor='red'})
// const two=document.getElementById('box2')
// two.addEventListener('click',()=>{document.body.style.backgroundColor='blue'})
// const three=document.getElementById('box3')
// three.addEventListener('click',()=>{document.body.style.backgroundColor='green'})
// const four=document.getElementById('box4')
// four.addEventListener('click',()=>{document.body.style.backgroundColor='yellow'})

// const boxes=document.querySelectorAll('.box')
// console.log(boxes)// ye node list deta ha or iske prototype me tum dekh sakte ho , ki ispe for each lag sakta ha
// boxes.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         if(button.id==='red'){document.body.style.backgroundColor=button.id}
//         if(button.id==='blue'){document.body.style.backgroundColor=button.id}
//         if(button.id==='green'){document.body.style.backgroundColor=button.id}
//         if(button.id==='yellow'){document.body.style.backgroundColor=button.id}
//     })
// })

const boxes = document.querySelectorAll(".box");
//console.log(boxes)// ye node list deta ha or iske prototype me tum dekh sakte ho , ki ispe for each lag sakta ha
boxes.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Yahan, event ek parameter hai jo addEventListener ke callback function ko pass kiya jata hai. 
    //Jab koi DOM element par event (jaise click) hota hai, tab JavaScript ek event object generate karta hai.
   //  Ye object kisi bhi event ke sath related information provide karta hai, jaise ki kis element par event hua, 
   //  event ka type kya hai, mouse ka coordinates, keyboard se associated kya hai, etc.

    // Yahan event object ko addEventListener ke callback function ke through access kiya gaya hai.
    
// Is object ke bahut sare properties hote hain jaise target, type, timeStamp, keyCode (keyboard events ke liye), etc.
  //Is code mein event.target click event ke target element ko refer karta hai, yaani wo element jis par click kiya gaya hai.

    //So, console.log(event.target) line ke through, console par wo element print hoga jis par click kiya gaya hai.
    // Isme, agar koi .box class wale element par click kiya gaya hai, to event.target us element ko refer karega.

    //console.log(event)
    //console.log(event.target);
    if(e.target.id==='red'){document.body.style.backgroundColor=button.id}
    if(e.target.id==='blue'){document.body.style.backgroundColor=button.id}
    if(e.target.id==='green'){document.body.style.backgroundColor=button.id}
    if(e.target.id==='yellow'){document.body.style.backgroundColor=button.id}
  });
});
