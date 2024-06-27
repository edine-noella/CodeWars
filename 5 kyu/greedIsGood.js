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
  const one1 = 100;
  const one5 = 50;

  for (let i = 0; i < dice.length; i++) {

      const count = dice.filter((v) => v === i).length;
      const value = dice[i];


    if ( count === 1) {
      
      if (value === 1) {
        score += one1;
      }else if (value === 5) {
        score += one5;
      }
      
    }
    
    if (count === 2) {
      if (value == 1) {
        score += one1 * 2;
      }else if (value == 5) {
        score += one5 * 2;
      }
    }

    if (count === 3) {
      if (value === 1) {
        score += 1000;
      }else if (value === 6) {
        score += 600;
      }else if (value === 5) {
        score += 500;
      }else if (value === 4) {
        score += 400;
      }else if (value === 3) {
        score += 300;
      }else if (value === 2) {
        score += 200;
      }
    }
    
      
  }

  return score;
}

console.log(score([2, 4, 4, 5, 4])); 