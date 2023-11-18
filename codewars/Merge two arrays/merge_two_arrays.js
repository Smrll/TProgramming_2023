function mergeArrays(a, b) {
  const arr=[];
  let l = Math.max(a.length,b.length)
  for (let i=0; i < l; i++){
  arr.push(a[i])
  arr.push(b[i])
  }
  return arr.filter(v=>v!==undefined)
}

const a = ["a", "b", "c", "d", "e"];
const b = [1, 2, 3, 4, 5];
console.log(mergeArrays(a, b));