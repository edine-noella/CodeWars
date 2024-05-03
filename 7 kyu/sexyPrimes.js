//a function to check if two numbers are sexy primes (a pair of primes that have a difference of 6)
//first check if the two numbers are prime, then check if the difference between them is 6
//a prime number is neither divisible by 2 nor by 3

function sexy_prime(x, y){

    if( x === 1 || y === 1){
        return false;
    }

    if( x > 2 ){
      for(let i = 2; i < x; i++){
        if(x % i === 0){
          return false;
        }
      }
    }

    if( y > 2 ){
        for(let i = 2; i < y; i++){
            if(y % i === 0){
            return false;
            }
        }
        }


  if(y - x === 6 || x - y === 6){
       return true;
}else{
    return false;
}
 

}

console.log(sexy_prime(5, 11))