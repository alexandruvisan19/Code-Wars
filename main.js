function validBraces(braces) {
	let regex = /\(\)|\[\]|\{\}/g;
	while (regex.test(braces)) {
		braces = braces.replace(regex, "");
	}
	return braces;
}
// console.log(validBraces("()))"), false);
// console.log(validBraces("()"), true);
// console.log(validBraces("[]"), true);
// console.log(validBraces("{}"), true);
// console.log(validBraces("(){}[]"), true);
// console.log(validBraces("([{}])"), true);
console.log(validBraces("(}"), false);
// console.log(validBraces("[(])"), false);
// console.log(validBraces("({})[({})]"), true);
// console.log(validBraces("(})"), false);
// console.log(validBraces("(({{[[]]}}))"), true);
// console.log(validBraces("{}({})[]"), true);
// console.log(validBraces(")(}{]["), false);
// console.log(validBraces("())({}}{()][]["), false);
// console.log(validBraces("(((({{"), false);
// console.log(validBraces("}}]]))}])"), false);
