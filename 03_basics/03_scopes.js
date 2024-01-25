// let a = 10
// const b=20
// var c= 30

var c = 300;  //--- but ye value print nhi hoga


//{} : isko scope bolte ha isko object k sath confuse mat karna , ye jab kisi k function ke sath aata ha or if else k sath aata ha tab wo uska scope hua
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a)//error dega

// console.log(b)// ye bhi error dega
console.log(c); // lekin ye run ho jayega jab a and b  ko comment out kar denge tab, or ye ha problem ki baat

// jo bhi cheez curly baraces( {} ) k andar likhte ha wo hua block scope or bahar ke values ha global scope, 
//global scope k values aap block scope me use kar sakte ho but vice versa not possible therefore we don't talk about var


let d=300//yaha 300 hi print hoga unlike line no 5
if (true) {
    let d = 10;
    
  }
  console.log(d)

 let e=500//yaha 300 hi print hoga unlike line no 5
if (true) {
    let e = 10;
    console.log("inner ", e)
  }
  console.log(e)

  //interview: browser me or node me differnet scope dikhta ha