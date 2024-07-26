
function XO(str) {
    let o = 0;
    let x = 0;
     str.toLowerCase().split('').map((char) => {
       if(char === 'o') o++;
       if(char === 'x') x++;
     })
    
    return o === x
}