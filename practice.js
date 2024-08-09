/*The ternary Operator is a shorthand for the if statement 
when assigning/returning a value based on a condition.*/
// (condition) ? value If True : value If False

function checkAge(age){
    return (age >= 18 ) ? "you are an adult" : "you are minor"
 }
 
 console.log(checkAge(18))