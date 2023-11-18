var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
};
function maxSum(root) {
    if (root === null) {
      return 0;
    }
    const leftSum = maxSum(root.left);
    const rightSum = maxSum(root.right);
    return Math.max(leftSum, rightSum) + root.value;
}