function duplicateEncode(word) {
    const charCount = new Map();
    word.toLowerCase().split('').forEach(char => {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    });
    const result = word.toLowerCase().split('').map(char => {
      return charCount.get(char) === 1 ? '(' : ')';
    }).join('');
    return result;
}