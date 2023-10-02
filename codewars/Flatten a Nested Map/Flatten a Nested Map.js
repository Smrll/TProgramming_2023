function flattenMap(map) {
    const result = {};
    function recurse(current, parentKey = '') {
      for (let key in current) {
        const newKey = parentKey ? `${parentKey}/${key}` : key;
        if (current[key] === null || current[key] === undefined) {
          result[newKey] = null;
        } else if (typeof current[key] === 'object' && !Array.isArray(current[key])) {
          recurse(current[key], newKey);
        } else {
          result[newKey] = current[key];
        }
      }
    }
    recurse(map);
    return result;
}