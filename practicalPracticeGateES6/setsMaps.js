//You're working with a list of product IDs that might contain duplicates. Use a Set to remove all duplicates and return the unique product IDs.

function removeDuplicates(ids) {
    return [...new Set(ids)];
}

const productIds = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(removeDuplicates(productIds));