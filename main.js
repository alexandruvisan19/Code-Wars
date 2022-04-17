function evenNumbers(array, number) {
	let num = number;
	let newArr = array.filter((num) => num % 2 === 0);
	let newArr2 = [];
	for (let i = newArr.length - 1; num > 0; i--) {
		newArr2.unshift(newArr[i]);
		num--;
	}
	return newArr2;
}

console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
