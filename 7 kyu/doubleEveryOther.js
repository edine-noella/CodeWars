
function doubleEveryOther(numbers) {
  return numbers.map((num, index) => {
    return index % 2 === 0 ? num : num * 2;
  });
}