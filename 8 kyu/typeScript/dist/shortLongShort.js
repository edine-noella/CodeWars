"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortLongShort = shortLongShort;
function shortLongShort(a, b) {
    let result = "";
    if (a.length > b.length) {
        result += b;
        result += a;
        result += b;
    }
    else {
        result += a;
        result += b;
        result += a;
    }
    return result;
}
console.log(shortLongShort("abc", "defi"));
