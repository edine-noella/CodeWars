//try every option available in question
//analyse the output
//find the pattern
// am returning the first elements with the lenght of the string/2 and if have decimal round it up
//from the already provided answer we just need to round up the length/2

function testit(s){
    return s.substr(0, Math.ceil(s.length/2));
}

//the attempt is not working

console.log(testit("aaaaaa"));
