let possibleNumbers = []

function solution(n, m) {
  if (!possibleNumbers.length) {
    for (let i = 2n; i <= 31622n; i++) {
      if(isPrime(i)) possibleNumbers.push(i**4n)
    }
  }
  
  return possibleNumbers.filter(number => number >= n && number <= m);
}

function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}