// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text){
    let count = 0;
    let obj = {};
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (obj[text[i]]) {
            obj[text[i]]++;
        } else {
            obj[text[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            count++;
        }
    }


    return count;

}