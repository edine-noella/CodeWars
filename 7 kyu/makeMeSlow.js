// create a variable and assign it a set timeout function that takes a function and and 7000 milliseconds as argument
// call return the variable
//Make me slow! Calling makeMeSlow() should take at least 7 seconds.

// function makeMeSlow() {
  
//     let start = Date.now();
//     let end = 0;
   
//    setTimeout( () => {
//     for (let x = 0; x < 1000000; ++x) { }
//       end += 7000; 
                         
//     }, 7);
  
//    return (start-end);
//   }


function makeMeSlow() {
  const startTime = Date.now();
  while (Date.now() - startTime < 7000) {}
}

console.log(makeMeSlow());