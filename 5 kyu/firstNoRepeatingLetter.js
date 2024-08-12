
function firstNonRepeatingLetter(s) {
    let arr = s.split('');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.slice(0, i).concat(arr.slice(i + 1));
        if (temp.indexOf(arr[i].toLowerCase()) === -1 && temp.indexOf(arr[i].toUpperCase()) === -1) {
        result = arr[i];
        break;
        }
    }
    return result;
}