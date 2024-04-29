function printTree(height) {
  // Loop through each level of the tree
  for (let i = 1; i <= height; i++) {
      let treeRow = '';

      // Add spaces for indentation
      for (let j = 0; j < height-i ; j++) {
          treeRow += ' ' ;
      }

      // Add asterisks for the branches
      for (let k = 0; k < 2 * i - 1; k++) {
          treeRow += '*';
      }

      console.log(treeRow);
  }
}
printTree(5)