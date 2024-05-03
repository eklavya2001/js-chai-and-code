// // const htinF=parseFloat(document.getElementById('ht').Value)

// // const htinM=htinF/3.2804

// // const weight=parseInt(document.getElementById('wt').Value)

// // function calculatbmi(){
// //     //document.getElementById('output').innerHTML=weight/htinM*htinM
// //     console.log("kam kar raha ha");
// // }

// const a=document.getElementById('joro')
// a.addEventListener('click',()=>{
//     const htinF=parseFloat(document.getElementById('ht').value)
//     //console.log(htinF)

// const htinM=htinF/3.2804
// //console.log(htinM)

// const weight=parseInt(document.getElementById('wt').value)
// const output=weight/(htinM*htinM)
// //console.log(output)
// const result=document.getElementById('output')

//     //document.getElementById('output').innerHTML=output
//     result.innerHTML=`<span> YOUR BODY MASS INDEX IS : ${output}</span>`
//     console.log("kam kar raha ha");
// })



const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});  //solution