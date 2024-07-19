
//count the divsors of a given number

export function divisors(n: number ) :number {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
    
  }

  console.log(divisors(4)); 