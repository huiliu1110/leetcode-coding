/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
	var temp = {};
	var i = 0;

	for(i = 0; i < nums.length; i++) {
		if(temp[nums[i]] === undefined) {
			temp[nums[i]] = 1;
		} else if(temp[nums[i]] === 1) {
			temp[nums[i]] = 2;
		}
	}

	for(var item in temp) {
		if(temp[item] === 1) {
			return parseInt(item);
		}
	} 
};