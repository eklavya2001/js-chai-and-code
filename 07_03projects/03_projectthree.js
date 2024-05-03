//const  date= new Date().toLocaleTimeString()// ye bahar nahi andar rakho tabhi 
//console.log(date)
//const clock=document.getElementById('clock')
setInterval(()=>{
    const  date= new Date().toLocaleTimeString()
    const clock=document.getElementById('clock')
    clock.innerHTML=date 
},1000)