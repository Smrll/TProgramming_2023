function towerBuilder(nFloors) {
    const tower = [];
    const maxWidth = 2 * nFloors - 1;
    for (let i = 1; i <= nFloors; i++) {
      const numBlocks = 2 * i - 1;
      const numSpaces = (maxWidth - numBlocks) / 2;
      const floorStr = ' '.repeat(numSpaces) + '*'.repeat(numBlocks) + ' '.repeat(numSpaces);
      tower.push(floorStr);
    }
    return tower;
}