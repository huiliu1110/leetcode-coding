/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
	var temp = {};
	var i;

	for(i = 0 ; i < s.length; i++) {
	    if(temp[s.charAt(i)] === undefined) {
	        temp[s.charAt(i)] = 1;
	    } else {
	        temp[s.charAt(i)] += 1;
	    }
	}

	for(i = 0 ; i < t.length; i++) {
		if(temp[t.charAt(i)] > 0) {
			temp[t.charAt(i)] -= 1;
		} else if(temp[t.charAt(i)] === 0 || temp[t.charAt(i)] === undefined) {
		    return t.charAt(i);
		}
	}

	return t.charAt(t.length - 1);
};
