snail = function(array) {
    const result = [];
    while (array.length > 0) {
      result.push(...array.shift());
      for (let i = 0; i < array.length; i++) {
        result.push(array[i].pop());
      }
      if (array.length > 0) {
        result.push(...array.pop().reverse());
      }
      const leftColumn = [];
      for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length > 0) {
          leftColumn.push(array[i].shift());
        }
      }
      result.push(...leftColumn);
    }
    return result;
}