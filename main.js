function sumCubes(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += Math.pow(i, 3);
	}
	return sum;
}

console.log(sumCubes(3));
console.log(Math.pow(2, 3));
