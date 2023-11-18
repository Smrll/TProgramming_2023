function moveZeros(arr) {
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[zeroCount++] = arr[i];
      }
    }
    for (let i = zeroCount; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
}