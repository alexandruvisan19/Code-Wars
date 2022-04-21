function calculate(n1) {
	return function calculate2(n2) {
		return function calculate3(n3) {
			return n1 + n2 + n3;
		};
	};
}

console.log(calculate(1)(2)(3));
