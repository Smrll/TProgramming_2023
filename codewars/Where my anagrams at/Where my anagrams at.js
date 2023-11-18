function areAnagrams(word1, word2) {
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');
    return sortedWord1 === sortedWord2;
  }
  function anagrams(word, words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
      if (areAnagrams(word, words[i])) {
        result.push(words[i]);
      }
    }
  
    return result;
}