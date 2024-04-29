function ultatree(height){
  for(let i=1; i<=height; i++){
      console.log(' '.repeat(i-1)+'*'.repeat(height-i+1));
  }
}
ultatree(5);