function anagramDifference(w1,w2){
    const freq1 = {};
    const freq2 = {};
    w1 = w1.toLowerCase();
    w2 = w2.toLowerCase();
    for (const char of w1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for (const char of w2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }
    let difference = 0;
    for (const char in freq1) {
        if (!freq2[char]) {
          difference += freq1[char];
        } else {
          difference += Math.abs(freq1[char] - freq2[char]);
          delete freq2[char];
        }
    }
    for (const char in freq2) {
        difference += freq2[char];
    }
    return difference;
}