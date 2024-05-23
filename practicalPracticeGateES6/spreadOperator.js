//You're working with multiple shopping carts (represented by arrays). Write a function combineCarts(cart1, cart2) that uses the spread operator to create a new array containing all items from both cart1 and cart2. 

function combineCarts(cart1, cart2) {
    return [...cart1, ...cart2];
}

//Can you create a copy of an object without modifying the original using spread syntax
const original = {key: 'value'};
const copy = {...original};

