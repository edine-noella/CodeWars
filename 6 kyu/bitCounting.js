

function countBits(n){
    return n.toString(2).split('').filter((el) => el === '1').length;
    //the toString(2) method converts the number to binary
}