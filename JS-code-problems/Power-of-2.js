// Complete the function that take a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n) {
	let powerArr = n === 0 ? [1] : [1, 2];
	for (let i = 2; i <= n; i++) {
		powerArr.push(Math.pow(2, i));
	}
	return powerArr;
}
