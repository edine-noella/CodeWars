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

    let diceCount = {}; //object to store the count of each die

    //count the number of each die
    dice.forEach(die => {
        if (diceCount[die]) {
            diceCount[die]++;
        } else {
            diceCount[die] = 1;
        }
    });

    //check for each rule
    for (let die in diceCount) {

        if (diceCount[die] >= 3) {
            if (die === '1') {
                score += 1000;
                diceCount[die] -= 3;
            } else {
                score += die * 100; // each die has 100 points
                diceCount[die] -= 3; //subtract 3 from the count of the die
            }
        }

        if (die === '1') {
            score += diceCount[die] * 100;
        } else if (die === '5') {
            score += diceCount[die] * 50; //each 5 has 50 points
        }
    }
    return score;
}

console.log(score([2, 4, 4, 5, 4])); 