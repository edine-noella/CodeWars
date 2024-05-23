//Data validation is crucial. Write a function createValidationProxy(obj) that takes an object and returns a proxy that validates any attempt to set a property value. If the value is invalid (e.g., not a number for a numeric property), throw an error.

const createValidationProxy = (obj) => {
    return new Proxy(obj, {
        set(target, key, value) {
            if (typeof target[key] === 'number' && typeof value !== 'number') {
                throw new Error(`Invalid value for property ${key}`);
            }
            target[key] = value;
            return true;
        }
    });
};

// Example usage:
const user = createValidationProxy({
    name: 'John',
    age: 30
});

user.age = 31; // Valid
console.log(user.age); // Output: 31
