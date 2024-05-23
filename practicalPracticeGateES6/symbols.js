//You're building a secure configuration system. Create a function secureConfig(config) that takes an object config and uses a Symbol as a key to store a private property named apiKey. Return the modified config object.

const apiKeySymbol = Symbol('apiKey');

function secureConfig(config) {
  config[apiKeySymbol] = config.apiKey;
  delete config.apiKey;  // Remove the plain-text apiKey property
  return config;
}

// Example usage:
const config = {
  apiKey: '12345-abcde',
  otherSetting: 'value'
};

const securedConfig = secureConfig(config);
console.log(securedConfig); // Output: { otherSetting: 'value', [Symbol(apiKey)]: '12345-abcde' }

// Accessing the private apiKey
console.log(securedConfig[apiKeySymbol]); // Output: '12345-abcde'


// We create a Symbol apiKeySymbol which will be used as the key for storing the apiKey.
// The secureConfig function assigns the value of config.apiKey to config[apiKeySymbol] and then deletes the original apiKey property from the config object to ensure it is not directly accessible.
// The modified config object is returned, with the apiKey now stored in a Symbol property, making it less accessible and more secure.