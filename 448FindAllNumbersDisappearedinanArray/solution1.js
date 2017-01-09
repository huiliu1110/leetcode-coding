/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
	var temp = [0];
  var result = [];
	var i;

	for(i = 0; i < nums.length; i++) {
		temp.push(0);
	}
	
	for(i = 0; i < nums.length; i++) {
		temp[nums[i]] = true;
	}
	
	for(i = 0; i < nums.length + 1; i++) {
		if(temp[i] !== true) {
		    temp[i] = i;
		}
	}
	
	for(i = 0; i < temp.length; i++) {
	    if(temp[i] !== 0 && temp[i] !== true) {
	        result.push(temp[i]);
	    }
	}
	
	return result;
};
