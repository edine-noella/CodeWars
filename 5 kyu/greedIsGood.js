//the argument is an array with five six-sided dice values

//rules

// Three 1's => 1000 points
// Three 6's => 600 points
// Three 5's => 500 points
// Three 4's => 400 points
// Three 3's => 300 points
// Three 2's => 200 points
// One 1 => 100 points
// One 5 => 50 point

function score(dice) {
  let score = 0;
  let one1 = 100;
  let one5 = 50;
  
  for (let i = 0; i < dice.length; i++) {
    

    if (dice.filter( (v) => v === i).length === 1) {
      
      if (dice[i] === 1) {
        score += one1;
      } 

      if (dice[i] === 5) {
        score += one5;
      }
      
    }
    
    if (dice.filter((v) => v === i).length === 2) {
      if (dice[i] === 1) {
        score += one1 * 2;
      }

      if (dice[i] === 5) {
        score += one5 * 2;
      }
    }

    if (dice.filter((v) => v === i).length === 3) {
      if ( dice[i] === 1) {
        score += 1000;
      }

      if (dice[i] === 6) {
        score += 600;
      }

      if (dice[i] === 5) {
        score += 500;
      }

      if (dice[i] === 4) {
        score += 400;
      }

      if (dice[i] === 3) {
        score += 300;
      }

      if (dice[i] === 2) {
        score += 200;
      }
    }
    
      
  }

  return score;
}

console.log(score([2, 4, 4, 5, 4])); 