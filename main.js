function multiply(num1, num2) {
	if (num2 !== undefined) {
		return num1 + num2;
	}
	return function executeMultiply(num2) {
		return num1 * num2;
	};
}

console.log(multiply(4, 5));
const double = multiply(2);
console.log(double(2));
