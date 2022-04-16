// "a **&  cZ"  =>  "10100000000000000000000001"

function change(string) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let arr = string.toLowerCase().replaceAll(" ", "").split("").join("");
	
	for (let i = 0; i < arr.length; i++) {
		if (/arr/.test(alphabet[i])) {
			return console.log(alphabet[i]);
		}
	}
	return alphabet.charCodeAt(0) - 97;
}

console.log(change("a **&  cZ"));
