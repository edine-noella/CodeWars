function reduceToOneDigit(n) {
    return n.toString().split('').map((a)=> parseInt(a)).reduce((a, b) => a + b, 0);
}
function digitalRoot(n) {    
    return n>9 ? digitalRoot(reduceToOneDigit(n)) : n;
    
}