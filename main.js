function scrollingText(text) {
	let newArr = [];
	for (let i = 0; i < text.length; i++) {
		newArr.push((text.slice(i, text.length) + text.slice(0, i)).toUpperCase());
	}
	return newArr;
}

console.log(scrollingText("codewars")); // ["ABC","BCA","CAB"]
