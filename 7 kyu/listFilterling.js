

function filter_list(l) {
    return l.filter((el) => typeof el === 'string');
}

let strin = 'a';
console.log(typeof(strin))
console.log(filter_list([1,2,'a','b'])); // [1, 2]