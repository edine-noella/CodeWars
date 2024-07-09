function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]));
//string duplicates
console.log(removeDuplicates(["a", "b", "c", "d", "e", "e", "e", "e", "e", "e", "e"]));
