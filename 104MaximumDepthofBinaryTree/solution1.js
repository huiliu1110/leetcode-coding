/**
 * Definition for a binary tree node.
 * 	function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 *	}
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxDepth = function(root) {
	var leftSubtreeHeight;
	var rightSubtreeHeight;
	var maxSubtreeHeight;

	if(root === undefined || root === null || root.val === undefined || root.val === null) {
		return 0;
	} else if(root.left === null && root.right === null){
		return 1;
	} else {
		leftSubtreeHeight = maxDepth(root.left);
		rightSubtreeHeight = maxDepth(root.right);
		maxSubtreeHeight = leftSubtreeHeight > rightSubtreeHeight ? leftSubtreeHeight : rightSubtreeHeight
		return maxSubtreeHeight + 1;
	}
}
