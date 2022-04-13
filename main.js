function insertDash(num) {
	let str = String(num);
	for (let i = 0; i < str.length; i++) {
		if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
			str.slice(i, "-");
		}
	}
	return str;
}

console.log(insertDash(454793));
