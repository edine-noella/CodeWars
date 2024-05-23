//You're building a user profile system. Create a function extractProfile(user) that takes an object user with properties name, age, city, and occupation (optional). Using destructuring, return a new object containing only the name and city properties.

function extractProfile(user) {
    const {name, city} = user;
    return {name, city};
}

const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    occupation: 'Engineer'
};

console.log(extractProfile(user));