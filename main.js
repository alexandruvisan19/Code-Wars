function count(string) {
	return string.split("").reduce((obj, elem) => {
		if (elem in obj) {
			obj[elem]++;
		} else {
			obj[elem] = 1;
		}
		return obj;
	}, {});
}

console.log(count("aba"));

// let obj = {};

// obj["a"] = obj["a"] || 1;

// console.log(obj);
