/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in place instead.
 */

var moveZeroes = function(nums) {
	var numberOfZero = 0;
	var i;

	for(i = 0; i < nums.length; i++) {
		if(nums[i] === 0) {
			numberOfZero++;
		}
	}
  
  for(i = 0; i < nums.length;) {
  	if(nums[i] === 0) {
  		nums.splice(i, 1);
  	} else {
  		i++;
  	}
  }

  for(i = 0; i < numberOfZero; i++) {
  	nums.push(0);
  }
};
