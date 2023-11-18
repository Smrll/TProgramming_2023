function pigIt(str) {
    const words = str.split(' ');
    function wordToPigLatin(word) {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.slice(1) + word[0] + 'ay';
      } else {
        return word;
      }
    }
    const pigLatinWords = words.map(wordToPigLatin);
    return pigLatinWords.join(' ');
}