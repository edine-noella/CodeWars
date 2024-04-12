//In an if use indexOf to check if the string contains good and continue if yes
// through a loop count the occurences of good 
// if the count is greater than 2 return 'I smell a series!'
// if the count is greater than 0 return 'Publish!'
function well(x){
  if(x.indexOf('good') === -1){
    return 'Fail!'
  }
  let count = 0;
  for(let i = 0; i < x.length; i++){
    if(x[i] === 'good'){
      count++;
    }
  }

  if(count > 2){
    return 'I smell a series!';
  } else if(count > 0){
    return 'Publish!';
  } else {
    return 'Fail!';
  }

}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // 'I smell a series!'