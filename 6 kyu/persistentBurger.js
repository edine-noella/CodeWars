

function persistence(num) {
    let count = 0;
    while (num.toString().length > 1) {
        num = num.toString().split('').reduce((a, b) => a * b);
        count++;
    }
    return count;
}