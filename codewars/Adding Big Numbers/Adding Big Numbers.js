function add(a, b) {
    let carry = 0; 
    let result = '';
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    for (let i = maxLength - 1; i >= 0; i--) {
      const digit1 = parseInt(a[i]);
      const digit2 = parseInt(b[i]);
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
    if (carry > 0) {
      result = carry + result;
    }
    return result;
}