function remove(str){
  let arr = [];

  for(let i= 0 ; i <str.length ; i++ ){
      
     if( !(str[i] === "a" || str[i] === "u" || str[i] === "e" || str[i] === "i"  || str[i] === "o"  ) ){       
        arr.push(str[i]);;      
     }  
          
  }


  return arr.join('');
 

}

console.log(remove("hello"));