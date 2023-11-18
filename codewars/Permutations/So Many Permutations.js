function permutations(string) {
    if (string.length <= 1) {
      return [string];
    }
    const result = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      const remainingChars = string.slice(0, i) + string.slice(i + 1);
      const perms = permutations(remainingChars);
      for (const perm of perms) {
        result.push(char + perm);
      }
    }
    return Array.from(new Set(result));
}