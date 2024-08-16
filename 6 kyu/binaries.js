function code (string) {
  return string.split('').map(function (char) {
    return ('0000000' + char.charCodeAt(0).toString(2)).slice(-7);
  }).join('');
}

function decode (bits) {
  return bits.match(/.{1,7}/g).map(function (byte) {
    return String.fromCharCode(parseInt(byte, 2));
  }).join('');
}