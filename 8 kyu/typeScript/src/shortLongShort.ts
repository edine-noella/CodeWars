export function shortLongShort(a:string, b:string):string {
    let result:string = "" ;
   
   if(a.length > b.length ){
      result += b;
      result += a;
      result += b;
   }else{
     result += a;
     result += b;
     result += a;
   }
   
   return result ;
     
 }


 console.log(shortLongShort("abc", "defi"))