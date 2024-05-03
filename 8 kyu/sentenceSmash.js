//join the words of the array to make a string
//trim the string to make sure there are no spaces at the beginning or end
//return the string

function smash (words) {
 const msg = words.join(' ').trim(); //join the words with a space btn the words and trim the string
 return msg;    
}; 

 console.log(smash(["hello", "world"])); 