
function cake (recipe, available) {
  let cakes = [];
  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;
    cakes.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return Math.min(...cakes); // Math.min() can take an array as an argument and return the smallest number in the array
}