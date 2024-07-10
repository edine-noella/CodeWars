"use strict";
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShape = generateShape;
function generateShape(int) {
    let result = "";
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            result += "+";
        }
        if (i < int - 1) {
            result += "\n";
        }
    }
    return result;
}
