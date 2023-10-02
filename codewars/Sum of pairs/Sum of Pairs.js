function sumPairs(ints, s) {
    const seenValues = new Set();
    for (let i = 0; i < ints.length; i++) {
      const currentNum = ints[i];
      const complement = s - currentNum;
      if (seenValues.has(complement)) {
        return [complement, currentNum];
      }
      seenValues.add(currentNum);
    }
    return undefined;
}