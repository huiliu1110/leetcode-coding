/**
 * @param {number} n
 * @return {string[]}
 */

 var fizzBuzz = function(n) {
 	var result = [];
 	var i = 1;
 	var temp;

 	for(i = 1; i <= n; i++) {
 		temp = i % 3 === 0 ? 'Fizz' : '';
 		temp = temp + (i % 5 === 0 ? 'Buzz' : '');
 		temp = temp === '' ? '' + i : temp;
 		
  		result.push(temp);
 	}
 	return result;
 };
