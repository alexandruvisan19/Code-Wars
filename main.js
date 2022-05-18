function calculate(x) {
	let obj = {};
	let newStr = "";
	for (let i = 0; i < x.length; i++) {
		obj[x[i]] = obj[x[i]] + 1 || 1;
	}
	for (let key in obj) {
		newStr += key + obj[key];
	}
	return newStr;
}

(function () {
	let word = "calculator";
	console.log(calculate(word));
})();
