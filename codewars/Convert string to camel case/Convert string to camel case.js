function toCamelCase(text) {
    const words = text.split(/[-_]/);
    if (words.length === 0) {
      return "";
    } else if (words.length === 1) {
      return words[0];
    } else {
      const result = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
      if (text.charAt(0).toUpperCase() === text.charAt(0)) {
        return result;
      } else {
        return result.charAt(0).toLowerCase() + result.slice(1);
      }
    }
}