function deepCount(a){
    let count = 0;
    function countRecursively(subArr) {
       for (let i = 0; i < subArr.length; i++) {
         const element = subArr[i];
   
         if (Array.isArray(element)) {
           countRecursively(element);
           count++; 
         } else {
           count++;
         }
       }
     }
     countRecursively(a);
     return count;
}