const expandedForm = (n) =>
	n
		.toString()
		.split("")
		.reverse()
		.map((a, i) => a * Math.pow(10, i))
		.filter((a) => a > 0);

// console.log("3456".replace(/(?!^)[1-9]/g, "0"));
// console.log(expandedForm(12)); // Should return '10 + 2'
// console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(3456)); // Should return '3000 + 400 + 50 + 6'
// expandedForm(70304), '70000 + 300 + 4');
