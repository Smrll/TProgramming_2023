function deepCount(a){
  return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}

const a = [1, 2, [3, 4, [5]]];
console.log(deepCount(a));