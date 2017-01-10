/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
	var temp = {};
	var i;

	for(i = 0; i < magazine.length; i++) {
		if(temp[magazine[i]] === undefined) {
			temp[magazine[i]] = 1;
		} else {
			temp[magazine[i]]++;
		}
	}

	for(i = 0; i < ransomNote.length; i++) {
		if(temp[ransomNote[i]] === undefined || temp[ransomNote[i]] === 0) {
			return false;
		} else if(temp[ransomNote[i]] > 0){
			temp[ransomNote[i]]--;
		}
	}

	return true;
};
