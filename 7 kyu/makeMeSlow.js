// create a variable and assign it a set timeout function that takes a function and and 7000 milliseconds as argument
// call return the variable
//Make me slow! Calling makeMeSlow() should take at least 7 seconds.

function makeMeSlow() {
  
    let start = Date.now();
      let end = 0;
    
      console.log(start);
    let slow = setTimeout( () => {
    for (let x = 0; x < 1000000; ++x) { }
      end += 1000;
      if( (end - start) > 7000  ){
           return;
      }
                          
    },1000);
  
   return slow;
  }

console.log(makeMeSlow());