"use strict";
//count the divsors of a given number
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors = divisors;
function divisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
