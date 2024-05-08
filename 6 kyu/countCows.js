// given the n number of years 
// the initial number of cows is 1
// each cow gives birth to one cow every year
// the number of cows doubles every 4 year
// return the number of cows after n years
// we start counting the age of a cow from 0 , that means it will be 4 years when the year is 3

function countCows(n){
    let cow = 1;
    let birthTimes = n%4;
    
    
    if(n > 4 ){
     cow = cow + ((cow * 2) + birthTimes) ;
    }

    if(n === 3){
        cow = cow + 1;
    }
    
    
    return cow;
  
}

console.log(countCows(5))
