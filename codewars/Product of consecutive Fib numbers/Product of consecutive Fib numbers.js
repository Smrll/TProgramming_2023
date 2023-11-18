function productFib(prod) {
    let n = 0;
    let fibN = 0;
    let fibNPlus1 = 1;
    while (fibN * fibNPlus1 < prod) {
      const temp = fibN;
      fibN = fibNPlus1;
      fibNPlus1 = temp + fibNPlus1;
      n++;
    }
    return [fibN, fibNPlus1, fibN * fibNPlus1 === prod];
}