"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeStrings = void 0;
const mergeStrings = (first, second) => {
    let result = first;
    for (let i = 0; i < second.length; i++) {
        if (first.endsWith(second.substring(0, i + 1))) {
            //if the first string ends with the substring of the second string from the beginning to the index i
            result = first + second.substring(i + 1);
        }
    }
    return result;
};
exports.mergeStrings = mergeStrings;
console.log((0, exports.mergeStrings)("abcde", "def"));
