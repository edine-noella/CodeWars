function findMinCost(money, days, cost) {
    let minCost = Infinity;
   
       // Finding the minimum cost for the desired vacation duration
       for (let i = 0; i <= cost.length - days; i++) {
           let currentSum = 0;
           for (let j = i; j < i + days; j++) {
               currentSum += cost[j];
           }
           if (currentSum < minCost) {
               minCost = currentSum;
           }
       }
   
       // Checking if the student has enough money
       if (money >= minCost) {
           return `money: ${minCost}`;
       }
   
       // If not enough money, find the maximum duration the student can afford
       let maxDays = 0;
       for (let d = 1; d < days; d++) {
           for (let i = 0; i <= cost.length - d; i++) {
               let currentSum = 0;
               for (let j = i; j < i + d; j++) {
                   currentSum += cost[j];
               }
               if (currentSum <= money) {
                   maxDays = Math.max(maxDays, d);
               }
           }
       }
   
       return `days: ${maxDays}`;
   
   }