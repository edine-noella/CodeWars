

function rot13(message){
  return message.split('').map(char => {
    if (char.match(/[a-zA-Z]/)) {
      let code = char.charCodeAt(0);
      let base = code < 91 ? 65 : 97;
      return String.fromCharCode(base + (code - base + 13) % 26);
    }
    return char;
  }).join('');
}