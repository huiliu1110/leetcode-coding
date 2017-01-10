/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
	var i;
	var gtemp;
	var stemp;

	g.sort(function(a, b) {
    return a - b;
  });
	s.sort(function(a, b) {
    return a - b;
  });
	
	for(i = 0 ; i < g.length ;) {
		gtemp = g[i];
		stemp = s[i];

		if(i === s.length) {
			return i;
		} else if(gtemp > stemp) {
			s.shift();
		} else if (gtemp <= stemp) {
			i++;
		}		
	}
	return i;
};
