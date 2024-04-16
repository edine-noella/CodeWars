//gets two parameters: the productivity of each elve and an array of string representing the time for each present
// workload of an elve = 24 hrs a day * productivity
// Return the number of present they can distribute at maximum. 

//calculate the total productivity of all elves by adding their workloads and multiplying each by 24hrs
//convert the time needed for each present to seconda
//arrange the time for each presents in ascending order
//loop through the time needed for each present and subtract the time from the total productivity to see nbr of presents that can be distributed
//return the total number of productivity


function countPresents(prod, presents){
   
    let totalProd = Object.values(prod).reduce((sum, productivity) => sum + productivity * 24, 0);
    
    let presentsInSeconds = presents.map(present => {
        const [hours, minutes, seconds] = present.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    });

    presentsInSeconds.sort((a, b) => a - b);

  
    let presentsDistributed = 0;
    for (const presentTime of presentsInSeconds) {
      
        if (presentTime <= totalProd * 3600) {          
            presentsDistributed++;
            totalProd -= presentTime / 3600;
        } else {
            break;
        }
    }

    return presentsDistributed;
 

}