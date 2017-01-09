/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
 	var temp = s.split('');
 	var result = [];
 	var i;

 	for(i = temp.length - 1; i >= 0; i--) {
 		result.push(temp[i]);
 	}

 	result = result.join('');
 	return result;
}
