/**
 * @param {number} n
 * @return {boolean}
 */

var canWinNim = function(n) {
	if(n === 1 || n === 2 || n === 3) {
		return true;
	} else if(n % 4 === 0) {
		return false;
	} else {
		return true;
	}
}
