// let a=parseInt(document.getElementById('no').value)
let c=Math.random()*100
let random=Math.round(c)
console.log(random)
let x=0
let y=false

let b=document.getElementById('button')
b.addEventListener('click',function abc(){
    if(y) return;
    x++
    
    let a=parseInt(document.getElementById('no').value)

    let d=document.getElementById('hint')
    if(a>random){
        d.innerHTML=`thora kam kar le bhai,sirf ${7-x} attempt bache hue ha`
        
    }
    else if(a<random){
        d.innerHTML=`thora badha le bhai ,sirf ${7-x} attempt bache hue ha`
        
    }
    else if(a==random ){
        d.innerHTML=`wah sahi uttar ha re babua and you got it right in ${x} attempt`
        y=true
    }
     
    else{
        d.innerHTML=`bhai tu kar kya raha ha ,sirf ${7-x} attempt bache hue ha`
        
    }
    if(x==7){d.innerHTML="o bas kar bhai, max ho gaya"
    y=true}
    console.log(`the function has run ${x} times`)
   // if(x>7){d.innerHTML="tu rehne de bhai, tere bas k nahi ha"}
})
