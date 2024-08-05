
function DNAStrand(dna){
  let dnaArr = dna.split('');
  let complementArr = [];
  dnaArr.forEach((el) => {
    if (el === 'A') {
      complementArr.push('T');
    } else if (el === 'T') {
      complementArr.push('A');
    } else if (el === 'C') {
      complementArr.push('G');
    } else if (el === 'G') {
      complementArr.push('C');
    }
  });
  return complementArr.join('');
}